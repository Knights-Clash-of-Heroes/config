import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const KingdomLandChunkSchema = z.object({
    id: z.number().int().nonnegative(),
    is_expansion: z.boolean(),
    position: z.object({
        x: z.number().int(),
        y: z.number().int(),
    }),
    price: z.array(PriceSchema).nullable(),
});
