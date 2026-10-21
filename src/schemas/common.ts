import { z } from "zod"

export const idSchema = z.number().int().positive()
export const nonNegativeIntSchema = z.number().int().nonnegative()
export const nullableIdSchema = idSchema.nullable()

export const attackTypeSchema = z.enum(["melee", "arrow", "siege", "magic"])
export const targetTypeSchema = z.enum(["single", "area", "chain"])
export const unitTypeSchema = z.enum(["on_foot", "mounted", "siege_machine", "monster"])
export const directionSchema = z.enum(["north", "south", "east", "west"])
export const costTypeSchema = z.enum(["resource", "item"])
export const attributeTypeSchema = z.enum(["mechanical", "aura", "descriptive"])
export const effectTypeSchema = z.enum(["temporary", "aura"])
export const hordeTypeSchema = z.enum(["peaceful", "hostile"])
export const hordeTriggerSchema = z.enum(["boss_defeated", "after_boss_turn", "after_dialog"])

export const sizeSchema = z.strictObject({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
})

export const positionSchema = z.strictObject({
    x: nonNegativeIntSchema,
    y: nonNegativeIntSchema,
})

export const statsSchema = z.strictObject({
    health: nonNegativeIntSchema,
    attack: nonNegativeIntSchema.nullable(),
    initiative: nonNegativeIntSchema.nullable(),
    speed: nonNegativeIntSchema.nullable(),
    range: nonNegativeIntSchema.nullable(),
})

export const attributeSchema = z.strictObject({
    attribute_id: nonNegativeIntSchema,
    value: z.number().int(),
})

export const priceItemSchema = z.strictObject({
    type: costTypeSchema,
    resource_id: idSchema.optional(),
    item_id: idSchema.optional(),
    quantity: nonNegativeIntSchema,
})

export const priceSchema = z.array(priceItemSchema)

/** A quantity that can also be the special "maximum" marker (fill the storage). */
export const quantityOrMaximumSchema = z.union([nonNegativeIntSchema, z.literal("maximum")])

export const rewardSchema = z.strictObject({
    type: costTypeSchema,
    resource_id: idSchema.optional(),
    item_id: idSchema.optional(),
    quantity: quantityOrMaximumSchema,
})

/** Fields shared by every localizable entity. */
export const namedSchema = z.strictObject({
    id: idSchema,
    name: z.string().min(1),
    name_key: z.string().min(1),
})

export const describedSchema = namedSchema.extend({
    description: z.string().nullable(),
    description_key: z.string().min(1),
})
