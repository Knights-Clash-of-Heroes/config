import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const LevelSchema = z.object({
    id: z.number().int().nonnegative(),
    xp_required: z.number().int().nonnegative(),
    rewards: z.array(PriceSchema),
});
