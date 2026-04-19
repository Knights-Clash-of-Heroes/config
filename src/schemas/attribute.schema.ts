import { z } from 'zod';

export const AttributeSchema = z.object({
    attribute_id: z.number().int().nonnegative(),
    value: z.number().int(),
});
