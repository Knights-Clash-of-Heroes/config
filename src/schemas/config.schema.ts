import { z } from 'zod';
import { ResourceSchema } from './resource.schema';
import { EnergySchema } from './energy.schema';
import { ShopCategorySchema } from './shop-category.schema';
import { ShopItemSchema } from './shop-item.schema';
import { LevelSchema } from './level.schema';
import { AttributeTypeSchema } from './attribute-type.schema';
import { UnitUpgradeSchema } from './unit-upgrade.schema';
import { UnitSchema } from './unit.schema';
import { BuildingSchema } from './building.schema';
import { KingdomLandChunkSchema } from './kingdom-land-chunk.schema';
import { SizeSchema } from './size.schema';
import { CampaignNodeSchema } from './campaign-node.schema';
import { CharacterSchema } from './character.schema';
import { QuestSchema } from './quest.schema';
import { QuestTaskSchema } from './quest-task.schema';
import { CastleResearchSchema } from './castle-research.schema';
import { ArsenalResearchSchema } from './arsenal-research.schema';
import { ItemSchema } from './item.schema';
import { BuildingUpgradeSchema } from './building-upgrade.schema';

export const ConfigSchema = z.object({
    resources: z.array(ResourceSchema),
    energy: EnergySchema,
    shop_categories: z.array(ShopCategorySchema),
    shop_items: z.array(ShopItemSchema),
    levels: z.array(LevelSchema),
    attribute_types: z.array(AttributeTypeSchema),
    unit_upgrades: z.array(UnitUpgradeSchema),
    building_upgrades: z.array(BuildingUpgradeSchema).optional(),
    units: z.array(UnitSchema),
    buildings: z.array(BuildingSchema),
    heroes: z.array(z.any()), // No details in config.json yet
    kingdom_land_chunk_size: SizeSchema,
    kingdom_land_chunks: z.array(KingdomLandChunkSchema),
    kingdom_buildings: z.array(z.any()).optional(),
    campaign_nodes: z.array(CampaignNodeSchema).optional(),
    characters: z.array(CharacterSchema).optional(),
    campaign_quotes: z.array(z.any()).optional(),
    quests: z.array(QuestSchema).optional(),
    quest_tasks: z.array(QuestTaskSchema).optional(),
    castle_researches: z.array(CastleResearchSchema).optional(),
    arsenal_researches: z.array(ArsenalResearchSchema).optional(),
    runic_tower_researches: z.array(z.any()).optional(),
    altar_of_heroes_researches: z.array(z.any()).optional(),
    items: z.array(ItemSchema).optional(),
    chest_rewards: z.array(z.any()).optional(),
    chests: z.array(z.any()).optional(),
});

export type Config = z.infer<typeof ConfigSchema>;
