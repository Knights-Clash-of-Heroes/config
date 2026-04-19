import { z } from 'zod';

export const ShopCategorySchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
});
