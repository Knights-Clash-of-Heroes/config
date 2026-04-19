import { z } from 'zod';

export const CostTypeSchema = z.enum(['resource', 'item']);
