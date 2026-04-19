import { z } from 'zod';

export const CharacterSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    description_key: z.string(),
    description: z.string().nullable(),
});
