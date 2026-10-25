/**
 * Maps entity ids of the original game database (`db`, recovered cache) to the ids used in `config.json`.
 *
 * `config.json` was written before the original files were found and uses its own sequential ids, so the
 * two id spaces do not match. Only entities that appear in the original initial city are mapped here.
 * `certain: false` marks matches made by name/size only (the original "Tent" is assumed to be the config "Pavillion").
 */
export type OriginalEntityKind = "building" | "unit"

export interface OriginalEntityMapping {
    name: string
    kind: OriginalEntityKind
    configId: number
    certain: boolean
}

export const originalEntityIds: Record<number, OriginalEntityMapping> = {
    490400668: { name: "Castle", kind: "building", configId: 1, certain: true },
    335153735: { name: "Barracks", kind: "building", configId: 2, certain: true },
    482206421: { name: "Tent", kind: "building", configId: 3, certain: false },
    965182906: { name: "Farm", kind: "building", configId: 5, certain: true },
    1212037112: { name: "Altar of Heroes", kind: "building", configId: 13, certain: true },
    1095215970: { name: "Market", kind: "building", configId: 14, certain: true },
    793331619: { name: "Pikeman 1", kind: "unit", configId: 1, certain: true },
}
