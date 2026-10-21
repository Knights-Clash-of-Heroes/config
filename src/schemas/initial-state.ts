import { z } from "zod"

import { directionSchema, idSchema, positionSchema, quantityOrMaximumSchema } from "./common"

const placedSchema = z.strictObject({
    chunk_id: idSchema,
    direction: directionSchema,
    position: positionSchema,
})

export const initialStateSchema = z.strictObject({
    kingdom: z.strictObject({
        resources: z.array(
            z.strictObject({
                resource_id: idSchema,
                quantity: quantityOrMaximumSchema,
            }),
        ),
        buildings: z.array(placedSchema.extend({ building_id: idSchema })),
        kingdom_chunk_ids: z.array(idSchema),
        units: z.array(placedSchema.extend({ unit_id: idSchema })),
    }),
})

export type InitialState = z.infer<typeof initialStateSchema>
