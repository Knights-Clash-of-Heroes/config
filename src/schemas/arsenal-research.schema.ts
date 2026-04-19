import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const ArsenalResearchSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    price: z.array(PriceSchema),
    research_time: z.number().int().nonnegative(),
    unit_upgrade_id: z.number().int().nonnegative().nullable(),
    unlock_unit_id: z.number().int().nonnegative().nullable(),
});
