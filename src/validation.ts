import { z } from "zod"

import { InitialState, initialStateSchema } from "./schemas/initial-state"
import { Config, configSchema } from "./schemas/config"

export type ValidationResult<T> = { success: true; data: T; warnings: string[] } | { success: false; errors: string[] }

const formatPath = (path: PropertyKey[]) =>
    path
        .reduce<string>((acc, part) => (typeof part === "number" ? `${acc}[${part}]` : `${acc}.${String(part)}`), "")
        .replace(/^\./, "") || "(root)"

const formatZodError = (error: z.ZodError) => error.issues.map((issue) => `${formatPath(issue.path)}: ${issue.message}`)

const idsOf = (items: { id: number }[]) => new Set(items.map((item) => item.id))

type Price = { resource_id?: number; item_id?: number }[] | null | undefined

/**
 * Checks that every id referenced by `config` points to an existing entity.
 */
export function checkConfigReferences(config: Config): { errors: string[]; warnings: string[] } {
    const errors: string[] = []
    const warnings: string[] = []
    const resources = idsOf(config.resources)
    const buildings = idsOf(config.buildings)
    const units = idsOf(config.units)
    const heroes = idsOf(config.heroes)
    const items = idsOf(config.items)
    const chunks = idsOf(config.kingdom_land_chunks)
    const levels = idsOf(config.levels)
    const characters = idsOf(config.characters)
    const attributes = idsOf(config.attribute_types)

    const ref = (set: Set<number>, id: number | null | undefined, path: string, target: string) => {
        if (id !== null && id !== undefined && !set.has(id)) errors.push(`${path}: unknown ${target} id ${id}`)
    }

    const checkPrice = (price: Price, path: string) =>
        price?.forEach((entry, index) => {
            ref(resources, entry.resource_id, `${path}[${index}].resource_id`, "resource")
            ref(items, entry.item_id, `${path}[${index}].item_id`, "item")
        })

    // Attribute types are still being filled in, so dangling attribute references only warn.
    const checkAttributes = (list: { attribute_id: number }[] | null, path: string) =>
        list?.forEach((entry, index) => {
            if (!attributes.has(entry.attribute_id))
                warnings.push(`${path}[${index}].attribute_id: unknown attribute id ${entry.attribute_id}`)
        })

    config.levels.forEach((level, i) => checkPrice(level.rewards, `levels[${i}].rewards`))
    config.shop_items.forEach((item, i) => {
        ref(buildings, item.building_id, `shop_items[${i}].building_id`, "building")
        ref(idsOf(config.shop_categories), item.category_id, `shop_items[${i}].category_id`, "shop category")
        ref(
            idsOf(config.castle_researches),
            item.castle_research_id,
            `shop_items[${i}].castle_research_id`,
            "castle research",
        )
        item.unlocks.forEach((unlock, j) =>
            ref(levels, unlock.level_id, `shop_items[${i}].unlocks[${j}].level_id`, "level"),
        )
    })
    config.units.forEach((unit, i) => {
        checkPrice(unit.training_cost, `units[${i}].training_cost`)
        checkPrice(unit.resurrection_cost, `units[${i}].resurrection_cost`)
        checkAttributes(unit.attributes, `units[${i}].attributes`)
        ref(buildings, unit.training_building_id, `units[${i}].training_building_id`, "building")
        unit.upgrade_ids.forEach((id, j) =>
            ref(idsOf(config.unit_upgrades), id, `units[${i}].upgrade_ids[${j}]`, "unit upgrade"),
        )
    })
    config.buildings.forEach((building, i) => {
        checkPrice(building.price, `buildings[${i}].price`)
        checkAttributes(building.attributes, `buildings[${i}].attributes`)
    })
    config.heroes.forEach((hero, i) => {
        checkAttributes(hero.attributes, `heroes[${i}].attributes`)
        hero.upgrade_ids.forEach((id, j) =>
            ref(idsOf(config.hero_upgrades), id, `heroes[${i}].upgrade_ids[${j}]`, "hero upgrade"),
        )
    })
    config.unit_upgrades.forEach((upgrade, i) => ref(units, upgrade.unit_id, `unit_upgrades[${i}].unit_id`, "unit"))
    config.hero_upgrades.forEach((upgrade, i) => ref(heroes, upgrade.hero_id, `hero_upgrades[${i}].hero_id`, "hero"))
    config.kingdom_land_chunks.forEach((chunk, i) => checkPrice(chunk.price, `kingdom_land_chunks[${i}].price`))
    config.kingdom_buildings.forEach((entry, i) => {
        ref(buildings, entry.building_id, `kingdom_buildings[${i}].building_id`, "building")
        ref(chunks, entry.chunk_id, `kingdom_buildings[${i}].chunk_id`, "land chunk")
        checkPrice(entry.reconstruction_price, `kingdom_buildings[${i}].reconstruction_price`)
    })
    config.campaign_nodes.forEach((node, i) => checkPrice(node.rewards, `campaign_nodes[${i}].rewards`))
    config.campaign_quotes.forEach((quote, i) =>
        ref(characters, quote.character_id, `campaign_quotes[${i}].character_id`, "character"),
    )
    config.quests.forEach((quest, i) => {
        ref(levels, quest.required_level_id, `quests[${i}].required_level_id`, "level")
        ref(characters, quest.character_id, `quests[${i}].character_id`, "character")
        checkPrice(quest.rewards, `quests[${i}].rewards`)
        quest.task_ids.forEach((id, j) =>
            ref(idsOf(config.quest_tasks), id, `quests[${i}].task_ids[${j}]`, "quest task"),
        )
    })
    const researches = [
        ["castle_researches", config.castle_researches],
        ["arsenal_researches", config.arsenal_researches],
        ["runic_tower_researches", config.runic_tower_researches],
        ["altar_of_heroes_researches", config.altar_of_heroes_researches],
        ["dragon_shop_researches", config.dragon_shop_researches],
    ] as const
    researches.forEach(([name, list]) =>
        list.forEach((research, i) => checkPrice(research.price, `${name}[${i}].price`)),
    )
    config.items.forEach((item, i) => checkPrice(item.sell_price, `items[${i}].sell_price`))
    config.chest_rewards.forEach((reward, i) => {
        ref(units, reward.unit_id, `chest_rewards[${i}].unit_id`, "unit")
        ref(items, reward.item_id, `chest_rewards[${i}].item_id`, "item")
        ref(idsOf(config.chests), reward.chest_id, `chest_rewards[${i}].chest_id`, "chest")
        ref(resources, reward.resource_id, `chest_rewards[${i}].resource_id`, "resource")
    })
    config.chests.forEach((chest, i) =>
        chest.rewards.forEach((reward, j) =>
            ref(
                idsOf(config.chest_rewards),
                reward.chest_reward_id,
                `chests[${i}].rewards[${j}].chest_reward_id`,
                "chest reward",
            ),
        ),
    )

    return { errors, warnings }
}

/**
 * Checks that the initial state only references entities that exist in `config`.
 */
export function checkInitialStateReferences(state: InitialState, config: Config): string[] {
    const errors: string[] = []
    const resources = idsOf(config.resources)
    const buildings = idsOf(config.buildings)
    const units = idsOf(config.units)
    const chunks = idsOf(config.kingdom_land_chunks)
    const owned = new Set(state.kingdom.kingdom_chunk_ids)

    const check = (set: Set<number>, id: number, path: string, target: string) => {
        if (!set.has(id)) errors.push(`${path}: unknown ${target} id ${id}`)
    }

    state.kingdom.resources.forEach((entry, i) =>
        check(resources, entry.resource_id, `kingdom.resources[${i}].resource_id`, "resource"),
    )
    state.kingdom.kingdom_chunk_ids.forEach((id, i) =>
        check(chunks, id, `kingdom.kingdom_chunk_ids[${i}]`, "land chunk"),
    )
    state.kingdom.buildings.forEach((entry, i) => {
        check(buildings, entry.building_id, `kingdom.buildings[${i}].building_id`, "building")
        check(owned, entry.chunk_id, `kingdom.buildings[${i}].chunk_id`, "owned land chunk")
    })
    state.kingdom.units.forEach((entry, i) => {
        check(units, entry.unit_id, `kingdom.units[${i}].unit_id`, "unit")
        check(owned, entry.chunk_id, `kingdom.units[${i}].chunk_id`, "owned land chunk")
    })

    return errors
}

export function validateConfig(data: unknown): ValidationResult<Config> {
    const parsed = configSchema.safeParse(data)
    if (!parsed.success) return { success: false, errors: formatZodError(parsed.error) }

    const { errors, warnings } = checkConfigReferences(parsed.data)
    return errors.length ? { success: false, errors } : { success: true, data: parsed.data, warnings }
}

export function validateInitialState(data: unknown, config: Config): ValidationResult<InitialState> {
    const parsed = initialStateSchema.safeParse(data)
    if (!parsed.success) return { success: false, errors: formatZodError(parsed.error) }

    const errors = checkInitialStateReferences(parsed.data, config)
    return errors.length ? { success: false, errors } : { success: true, data: parsed.data, warnings: [] }
}
