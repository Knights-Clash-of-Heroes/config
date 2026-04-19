import { z } from 'zod';

export const StatsSchema = z.object({
    health: z.number().int().nonnegative(),
    attack: z.number().int().nonnegative().nullable(),
    initiative: z.number().int().nonnegative().nullable(),
    speed: z.number().int().nonnegative().nullable(),
    range: z.number().int().nonnegative().nullable(),
});
