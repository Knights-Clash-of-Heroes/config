import { describe, expect, test } from "vitest"
import { readFileSync } from "fs"
import { resolve } from "path"

import { configSchema, initialStateSchema, validateConfig, validateInitialState } from "../src"

const readJson = (file: string): unknown => JSON.parse(readFileSync(resolve(__dirname, "..", file), "utf-8"))

describe("config.json", () => {
    const raw = readJson("config.json")

    test("matches the schema", () => {
        expect(configSchema.safeParse(raw).success).toBe(true)
    })

    test("has valid references", () => {
        const result = validateConfig(raw)
        expect(result.success).toBe(true)
    })

    test("rejects unknown properties", () => {
        const result = configSchema.safeParse({ ...(raw as object), unexpected: true })
        expect(result.success).toBe(false)
    })

    test("rejects duplicated ids", () => {
        const config = structuredClone(raw) as { resources: { id: number }[] }
        config.resources.push({ ...config.resources[0] })
        expect(configSchema.safeParse(config).success).toBe(false)
    })

    test("rejects dangling references", () => {
        const config = structuredClone(raw) as { kingdom_buildings: { building_id: number }[] }
        config.kingdom_buildings[0].building_id = 9999
        const result = validateConfig(config)
        expect(result.success).toBe(false)
    })
})

describe("initial_state.json", () => {
    const raw = readJson("initial_state.json")
    const config = validateConfig(readJson("config.json"))

    test("matches the schema", () => {
        expect(initialStateSchema.safeParse(raw).success).toBe(true)
    })

    test("only references existing config entities", () => {
        if (!config.success) throw new Error("config.json is invalid")
        expect(validateInitialState(raw, config.data).success).toBe(true)
    })

    test("rejects an invalid direction", () => {
        const state = structuredClone(raw) as { kingdom: { buildings: { direction: string }[] } }
        state.kingdom.buildings[0].direction = "up"
        expect(initialStateSchema.safeParse(state).success).toBe(false)
    })
})
