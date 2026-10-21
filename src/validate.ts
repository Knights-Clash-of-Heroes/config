import { readFileSync } from "fs"
import { resolve } from "path"

import { validateConfig, validateInitialState } from "./validation"

const root = resolve(__dirname, "..")

const readJson = (file: string): unknown => JSON.parse(readFileSync(resolve(root, file), "utf-8"))

function report(file: string, errors: string[]) {
    console.error(`✖ ${file} is invalid (${errors.length} problem${errors.length === 1 ? "" : "s"}):`)
    errors.forEach((error) => console.error(`  - ${error}`))
}

function warn(file: string, warnings: string[]) {
    warnings.forEach((warning) => console.warn(`⚠ ${file}: ${warning}`))
}

function main() {
    const config = validateConfig(readJson("config.json"))
    if (!config.success) {
        report("config.json", config.errors)
        process.exit(1)
    }
    warn("config.json", config.warnings)
    console.log("✔ config.json is valid")

    const state = validateInitialState(readJson("initial_state.json"), config.data)
    if (!state.success) {
        report("initial_state.json", state.errors)
        process.exit(1)
    }
    console.log("✔ initial_state.json is valid")
}

main()
