# AGENTS.md - Knights: Clash of Heroes Configuration

## Overview

This repository contains game configuration data for Knights: Clash of Heroes. The primary files are:
- `config.json` - Main game configuration (resources, units, buildings, quests, etc.)
- `en.json` - English localization strings
- `README.md` - Documentation

---

## Commands

### JSON Validation

```bash
# Validate config.json syntax (Windows PowerShell)
Get-Content config.json | ConvertFrom-Json

# Or use any JSON validator
# VS Code: Ctrl+Shift+P > "JSON: Validate"
```

There are no build or test commands in this repository - it's pure configuration data.

---

## Code Style Guidelines

### JSON Structure

- Use 2-space indentation
- No trailing commas in arrays/objects
- Use double quotes for all keys and string values
- Group related sections with comments (e.g., `// recursos do jogo`)
- Keep objects aligned and consistent

### Naming Conventions

- **Keys**: Use lowercase with underscores (`name_key`, `description_key`)
- **IDs**: Use integer IDs (e.g., `"id": 1`)
- **Arrays**: Use plural names (`resources`, `buildings`, `units`)
- **Localization keys**: Format as `{entity_type}_{id}_{property}` (e.g., `resource_1_name`, `building_2_description`)

### Entity Structure Patterns

**Resource**:
```json
{
  "id": 1,
  "name": "Gold",
  "name_key": "resource_1_name",
  "description_key": "resource_1_description",
  "description": "Money: the more you have, the better!"
}
```

**Unit**:
```json
{
  "id": 1,
  "name": "Militiaman",
  "name_key": "unit_1_name",
  "description_key": "unit_1_description",
  "description": "Just a peasant with a pike",
  "training_time": 15,
  "training_cost": [
    { "type": "resource", "resource_id": 1, "quantity": 380 }
  ],
  "type_id": 1,
  "attack_type_id": 1,
  "training_building_id": 2,
  "training_building_min_level": 1,
  "size": { "width": 1, "height": 1 },
  "stats": {
    "health": 100,
    "attack": 25,
    "initiative": 100,
    "speed": 3,
    "range": null
  },
  "attributes": null,
  "upgrade_ids": []
}
```

**Building**:
```json
{
  "id": 1,
  "name": "Castle",
  "name_key": "building_1_name",
  "description_key": "building_1_description",
  "price": null,
  "construction_time": null,
  "size": { "width": 6, "height": 6 },
  "stats": { "health": 0, "attack": null, "initiative": null, "speed": null, "range": null },
  "attributes": null
}
```

### Required Fields

All entities must include:
- `id` - Unique integer identifier
- `name` - Display name
- `name_key` - Localization key
- `description_key` - Localization key

### Null Handling

- Use `null` for optional/undefined fields (not empty strings or `0`)
- Use `"maximum"` string for maximum quantity values (e.g., energy)

### ID References

- When referencing other entities, use `*_id` suffix (e.g., `resource_id`, `building_id`, `attack_type_id`)
- Ensure referenced IDs exist in their respective arrays

### Common Patterns

**Price/Cost arrays**:
```json
"price": [
  { "type": "resource", "resource_id": 1, "quantity": 200 },
  { "type": "resource", "resource_id": 2, "quantity": 10 }
]
```

**Stats objects**:
```json
"stats": {
  "health": 120,
  "attack": null,
  "initiative": null,
  "speed": null,
  "range": null
}
```

**Size objects**:
```json
"size": { "width": 4, "height": 4 }
```

### Localization

- Always use `*_key` fields for text that will be localized
- Add corresponding entries to `en.json` using the key format
- Keys follow pattern: `{entity_type}_{id}_{property}` (e.g., `quest_1_description`)

### Error Handling

- Always validate JSON after modifications
- Check that all referenced IDs are valid
- Ensure required fields are not null when needed

---

## Project-Specific Notes

- Game is a turn-based strategy game with units, buildings, and kingdom management
- Maximum level is 15
- Kingdom uses 5x5 chunk grid (starts with center 3x3)
- Units have attack types: melee (1), arrow (2), magic (3), siege (4)
- Energy regenerates 1 point per hour (3600 seconds)
- Resources include: Gold, Wood, Stone, Iron, Crystal, XP, Energy, and Dragoon units