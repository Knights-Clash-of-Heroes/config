import { z } from 'zod';
import { CostTypeSchema } from './cost-type.schema';

export const PriceSchema = z.object({
    type: CostTypeSchema,
    resource_id: z.number().int().nonnegative().nullable().optional(),
    item_id: z.number().int().nonnegative().nullable().optional(),
    quantity: z.union([z.number().int().nonnegative(), z.literal('maximum')]),
});
