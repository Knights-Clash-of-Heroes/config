import { z } from "zod"

import { nonNegativeIntSchema } from "./common"

/**
 * A city entity as sent by the original server in the `entities` block of the `initialize` response.
 * `id` is the entity id of the original game database, which is NOT an id of `config.json`
 * (see `originalEntityIds`).
 */
export const originalEntitySchema = z.strictObject({
    id: z.number().int().positive(),
    sceneId: z.number().int().positive(),
    owner: z.number().int().nonnegative(),
    x: z.number(),
    y: z.number(),
    dir: z.number().int().nonnegative(),
})

export const initialStateSchema = z.strictObject({
    player: z.strictObject({
        level: z.number().int().positive(),
        experience: nonNegativeIntSchema,
        money: nonNegativeIntSchema,
        cash: nonNegativeIntSchema,
        wood: nonNegativeIntSchema,
        stone: nonNegativeIntSchema,
        iron: nonNegativeIntSchema,
    }),
    entities: z.record(z.string().regex(/^\d+$/), originalEntitySchema).superRefine((entities, ctx) => {
        for (const [key, entity] of Object.entries(entities)) {
            if (String(entity.sceneId) !== key) {
                ctx.addIssue({
                    code: "custom",
                    message: `sceneId ${entity.sceneId} must match its key "${key}"`,
                    path: [key],
                })
            }
        }
    }),
    options: z.strictObject({
        landLimit: z.number().int().positive(),
    }),
})

export type OriginalEntity = z.infer<typeof originalEntitySchema>
export type InitialState = z.infer<typeof initialStateSchema>
