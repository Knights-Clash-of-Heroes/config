import { z } from 'zod';

export const QuestTaskSchema = z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    description_key: z.string(),
    description: z.string(),
});
