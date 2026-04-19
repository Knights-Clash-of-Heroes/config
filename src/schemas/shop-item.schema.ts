import { z } from 'zod';

export const ShopItemSchema = z.object({
    id: z.number().int().nonnegative(),
    type: z.enum(['building', 'resource', 'item']), // Inferred
    building_id: z.number().int().nonnegative().nullable().optional(),
    resource_id: z.number().int().nonnegative().nullable().optional(),
    item_id: z.number().int().nonnegative().nullable().optional(),
    category_id: z.number().int().nonnegative(),
    default_limit: z.number().int().nonnegative(),
    castle_research_id: z.number().int().nonnegative().nullable(),
    unlocks: z.array(z.object({
        level_id: z.number().int().nonnegative(),
        increase_limit: z.number().int().nonnegative(),
    })).optional(),
});
