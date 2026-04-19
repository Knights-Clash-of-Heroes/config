import { z } from 'zod';
import { PriceSchema } from './price.schema';

export const QuestSchema = z.object({
    id: z.number().int().nonnegative(),
    required_level_id: z.number().int().nonnegative(),
    name: z.string(),
    name_key: z.string(),
    description_key: z.string(),
    description: z.string(),
    character_id: z.number().int().nonnegative(),
    task_ids: z.array(z.number().int().nonnegative()),
    rewards: z.array(PriceSchema),
});
