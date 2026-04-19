import { z } from 'zod';
import { UnitTypeSchema } from './unit-type.schema';
import { AttackTypeSchema } from './attack-type.schema';
import { PriceSchema } from './price.schema';
import { SizeSchema } from './size.schema';
import { StatsSchema } from './stats.schema';
import { AttributeSchema } from './attribute.schema';

export const UnitSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    description: z.string(),
    description_key: z.string(),
    type: UnitTypeSchema,
    attack_type: AttackTypeSchema,
    target_type: z.string().optional(), // Found in config.json: "single"
    target_range: z.number().int().nonnegative().nullable().optional(), // Found in config.json
    training_building_id: z.number().int().nonnegative().nullable(),
    training_building_min_level: z.number().int().nonnegative().nullable(),
    training_cost: z.union([PriceSchema, z.array(PriceSchema)]).nullable(), // Config has array, docs say object
    training_time: z.number().int().nonnegative().nullable(),
    size: SizeSchema,
    occupation: z.number().int().nonnegative().optional(),
    stats: StatsSchema,
    attributes: z.array(AttributeSchema).nullable(),
    upgrade_ids: z.array(z.number().int().nonnegative()).nullable().optional(),
    arsenal_research_ids: z.array(z.number().int().nonnegative()).nullable().optional(),
});
