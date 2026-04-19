import { z } from 'zod';
import { AttackTypeSchema } from './attack-type.schema';

export const AttributeTypeSchema = z.object({
    id: z.number().int().nonnegative(),
    attack_type: AttackTypeSchema.nullable().optional(),
    name: z.string(),
    name_key: z.string(),
    description_key: z.string(),
    description: z.string(),
});
