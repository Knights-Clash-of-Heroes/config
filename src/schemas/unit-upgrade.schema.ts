import { z } from 'zod';
import { StatsSchema } from './stats.schema';
import { AttributeSchema } from './attribute.schema';

export const UnitUpgradeSchema = z.object({
    id: z.number().int().nonnegative(),
    unit_id: z.number().int().nonnegative(),
    arsenal_research_id: z.number().int().nonnegative().nullable(),
    stats: StatsSchema.nullable(),
    attributes: z.array(AttributeSchema).nullable(),
});
