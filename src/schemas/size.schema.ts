import { z } from 'zod';

export const SizeSchema = z.object({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
});
