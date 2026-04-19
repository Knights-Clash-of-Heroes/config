import { z } from 'zod';

export const EnergySchema = z.object({
    maximum: z.number().int().nonnegative(),
    regeneration_time: z.number().int().nonnegative(),
    regeneration_quantity: z.number().int().nonnegative(),
});
