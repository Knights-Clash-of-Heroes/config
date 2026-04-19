import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const ItemSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    sell_price: z.array(PriceSchema),
});
