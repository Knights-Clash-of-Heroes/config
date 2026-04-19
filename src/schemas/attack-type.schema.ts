import { z } from 'zod';

export const AttackTypeSchema = z.enum(['melee', 'arrow', 'siege', 'magic']);
