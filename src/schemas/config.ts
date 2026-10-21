import { z } from "zod"

import {
    attackTypeSchema,
    attributeSchema,
    attributeTypeSchema,
    describedSchema,
    directionSchema,
    effectTypeSchema,
    idSchema,
    namedSchema,
    nonNegativeIntSchema,
    nullableIdSchema,
    positionSchema,
    priceSchema,
    rewardSchema,
    sizeSchema,
    statsSchema,
    targetTypeSchema,
    unitTypeSchema,
} from "./common"

const nullablePriceSchema = priceSchema.nullable()
const nullableAttributesSchema = z.array(attributeSchema).nullable()

export const settingsSchema = z.strictObject({
    initial_occupation_limit: nonNegativeIntSchema,
})

export const resourceSchema = describedSchema

export const shopCategorySchema = namedSchema

export const shopItemSchema = z.strictObject({
    id: idSchema,
    type: z.enum(["building"]),
    building_id: idSchema,
    category_id: idSchema,
    default_limit: nonNegativeIntSchema,
    castle_research_id: nullableIdSchema,
    unlocks: z.array(
        z.strictObject({
            level_id: idSchema,
            increase_limit: nonNegativeIntSchema,
        }),
    ),
})

export const levelSchema = z.strictObject({
    id: idSchema,
    xp_required: nonNegativeIntSchema,
    rewards: z.array(rewardSchema),
})

export const attributeTypeDefinitionSchema = describedSchema.extend({
    id: nonNegativeIntSchema,
    type: attributeTypeSchema.optional(),
    attack_type: attackTypeSchema.optional(),
})

export const auraTypeSchema = describedSchema.extend({
    value: z.number().int(),
    radius: nonNegativeIntSchema,
})

export const effectTypeDefinitionSchema = describedSchema.extend({
    type: effectTypeSchema,
    value: z.number().int().optional(),
    aura_id: idSchema.optional(),
    duration: nonNegativeIntSchema,
})

export const unitUpgradeSchema = z.strictObject({
    id: idSchema,
    unit_id: idSchema,
    arsenal_research_id: nullableIdSchema,
    stats: statsSchema.partial().nullable(),
    attributes: nullableAttributesSchema,
})

export const unitSchema = describedSchema.extend({
    training_time: nonNegativeIntSchema.nullable(),
    training_cost: nullablePriceSchema,
    type: unitTypeSchema,
    attack_type: attackTypeSchema,
    target_type: targetTypeSchema,
    target_range: nonNegativeIntSchema.nullable(),
    training_building_id: nullableIdSchema,
    training_building_min_level: nullableIdSchema,
    occupation: nonNegativeIntSchema.optional(),
    size: sizeSchema,
    stats: statsSchema,
    attributes: nullableAttributesSchema,
    upgrade_ids: z.array(idSchema),
    resurrection_time: nonNegativeIntSchema,
    resurrection_timeout: nonNegativeIntSchema,
    resurrection_cost: nullablePriceSchema,
})

export const buildingSchema = describedSchema.extend({
    price: nullablePriceSchema,
    construction_time: nonNegativeIntSchema.nullable().optional(),
    size: sizeSchema,
    stats: statsSchema,
    attributes: nullableAttributesSchema,
    shop_item_category_id: idSchema.optional(),
    attack_type: attackTypeSchema.optional(),
    target_type: targetTypeSchema.optional(),
    target_range: nonNegativeIntSchema.nullable().optional(),
})

export const heroSchema = describedSchema.extend({
    type: unitTypeSchema,
    attack_type: attackTypeSchema,
    target_type: targetTypeSchema,
    target_range: nonNegativeIntSchema.nullable(),
    size: sizeSchema,
    stats: statsSchema,
    attributes: nullableAttributesSchema,
    upgrade_ids: z.array(idSchema),
})

export const heroUpgradeSchema = z.strictObject({
    id: idSchema,
    hero_id: idSchema,
    altar_of_heroes_research_id: nullableIdSchema,
    stats: statsSchema.partial().nullable(),
    attributes: nullableAttributesSchema,
})

export const kingdomLandChunkSizeSchema = sizeSchema

export const kingdomLandChunkSchema = z.strictObject({
    id: idSchema,
    is_expansion: z.boolean(),
    position: positionSchema,
    price: nullablePriceSchema,
})

export const kingdomBuildingSchema = z.strictObject({
    id: idSchema,
    building_id: idSchema,
    chunk_id: idSchema,
    direction: directionSchema,
    position: positionSchema,
    reconstruction_price: priceSchema,
    reconstruction_time: nonNegativeIntSchema,
})

export const campaignNodeSchema = namedSchema.extend({
    rewards: z.array(rewardSchema),
    allowed_unit_quanty: nonNegativeIntSchema,
    allowed_unit_squares: z.array(positionSchema),
})

export const characterSchema = describedSchema

export const campaignQuoteSchema = z.strictObject({
    id: idSchema,
    character_id: idSchema,
    quote_key: z.string().min(1),
    quote: z.string().min(1),
})

export const questSchema = describedSchema.extend({
    required_level_id: idSchema,
    character_id: nullableIdSchema,
    task_ids: z.array(idSchema),
    rewards: z.array(rewardSchema),
})

export const questTaskSchema = describedSchema

const researchBase = namedSchema.extend({
    price: priceSchema,
    research_time: nonNegativeIntSchema,
})

export const castleResearchSchema = researchBase.extend({
    building_upgrade_id: nullableIdSchema,
    unlock_building_id: nullableIdSchema,
})

export const arsenalResearchSchema = researchBase.extend({
    unit_upgrade_id: nullableIdSchema,
    unlock_unit_id: nullableIdSchema,
})

export const runicTowerResearchSchema = researchBase.extend({
    unlock_spell_id: nullableIdSchema,
    unlock_rune_id: nullableIdSchema,
})

export const altarOfHeroesResearchSchema = researchBase.extend({
    hero_upgrade_id: nullableIdSchema,
    unlock_hero_id: nullableIdSchema,
})

export const dragonShopResearchSchema = researchBase.extend({
    building_upgrade_id: nullableIdSchema,
    unit_upgrade_id: nullableIdSchema,
})

export const itemSchema = namedSchema.extend({
    sell_price: priceSchema,
})

export const chestRewardSchema = namedSchema.extend({
    type: z.enum(["unit", "item", "chest", "resource"]),
    unit_id: nullableIdSchema,
    item_id: nullableIdSchema,
    chest_id: nullableIdSchema,
    resource_id: nullableIdSchema,
    quantity: nonNegativeIntSchema,
})

export const chestSchema = namedSchema.extend({
    rewards: z.array(
        z.strictObject({
            chest_reward_id: idSchema,
            chance: z.number().min(0).max(100),
        }),
    ),
})

export const parchmentSchema = namedSchema.extend({
    spell_id: idSchema,
})

const uniqueIds = <T extends z.ZodType<{ id: number }>>(schema: T) =>
    z.array(schema).refine((items) => new Set(items.map((item) => item.id)).size === items.length, {
        message: "Duplicate id found",
    })

export const configSchema = z.strictObject({
    settings: settingsSchema,
    resources: uniqueIds(resourceSchema),
    shop_categories: uniqueIds(shopCategorySchema),
    shop_items: uniqueIds(shopItemSchema),
    levels: uniqueIds(levelSchema),
    attribute_types: uniqueIds(attributeTypeDefinitionSchema),
    effect_types: uniqueIds(effectTypeDefinitionSchema),
    aura_types: uniqueIds(auraTypeSchema),
    unit_upgrades: uniqueIds(unitUpgradeSchema),
    units: uniqueIds(unitSchema),
    buildings: uniqueIds(buildingSchema),
    heroes: uniqueIds(heroSchema),
    hero_upgrades: uniqueIds(heroUpgradeSchema),
    kingdom_land_chunk_size: kingdomLandChunkSizeSchema,
    kingdom_land_chunks: uniqueIds(kingdomLandChunkSchema),
    kingdom_buildings: uniqueIds(kingdomBuildingSchema),
    campaign_nodes: uniqueIds(campaignNodeSchema),
    characters: uniqueIds(characterSchema),
    campaign_quotes: uniqueIds(campaignQuoteSchema),
    quests: uniqueIds(questSchema),
    quest_tasks: uniqueIds(questTaskSchema),
    castle_researches: uniqueIds(castleResearchSchema),
    arsenal_researches: uniqueIds(arsenalResearchSchema),
    runic_tower_researches: uniqueIds(runicTowerResearchSchema),
    altar_of_heroes_researches: uniqueIds(altarOfHeroesResearchSchema),
    dragon_shop_researches: uniqueIds(dragonShopResearchSchema),
    items: uniqueIds(itemSchema),
    chest_rewards: uniqueIds(chestRewardSchema),
    chests: uniqueIds(chestSchema),
    parchments: uniqueIds(parchmentSchema),
})

export type Config = z.infer<typeof configSchema>
