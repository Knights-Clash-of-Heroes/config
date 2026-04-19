import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const CastleResearchSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    price: z.array(PriceSchema),
    research_time: z.number().int().nonnegative(),
    building_upgrade_id: z.number().int().nonnegative().nullable(),
    unlock_building_id: z.number().int().nonnegative().nullable(),
});
