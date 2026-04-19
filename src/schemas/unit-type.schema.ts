import { z } from 'zod';

export const UnitTypeSchema = z.enum(['on_foot', 'mounted', 'siege_machine', 'monster']);
