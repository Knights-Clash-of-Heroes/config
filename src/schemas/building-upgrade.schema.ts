import { z } from 'zod';
import { StatsSchema } from './stats.schema';
import { AttributeSchema } from './attribute.schema';

export const BuildingUpgradeSchema = z.object({
    id: z.number().int().nonnegative(),
    building_id: z.number().int().nonnegative(),
    castle_research_id: z.number().int().nonnegative().nullable(),
    stats: StatsSchema.nullable(),
    attributes: z.array(AttributeSchema).nullable(),
});
