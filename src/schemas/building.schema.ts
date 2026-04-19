import { z } from 'zod';
import { SizeSchema } from './size.schema';
import { StatsSchema } from './stats.schema';
import { AttributeSchema } from './attribute.schema';
import { PriceSchema } from './price.schema';
import { AttackTypeSchema } from './attack-type.schema';

export const BuildingSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    description: z.string(),
    description_key: z.string(),
    size: SizeSchema,
    stats: StatsSchema,
    attributes: z.array(AttributeSchema).nullable(),
    castle_research_ids: z.array(z.number().int().nonnegative()).nullable().optional(),
    price: z.array(PriceSchema).nullable(),
    construction_time: z.number().int().nonnegative().nullable(),
    upgrade_ids: z.array(z.number().int().nonnegative()).nullable().optional(),
    // Fields found in config.json but not in main docs table
    shop_item_category_id: z.number().int().nonnegative().optional(),
    attack_type: AttackTypeSchema.optional(),
    target_type: z.string().optional(),
    target_range: z.number().int().nonnegative().nullable().optional(),
});
