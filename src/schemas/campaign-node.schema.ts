import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const CampaignNodeSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    rewards: z.array(PriceSchema),
    allowed_unit_quanty: z.number().int().nonnegative().optional(),
    allowed_unit_squares: z.array(z.object({
        x: z.number().int(),
        y: z.number().int(),
    })).optional(),
});
