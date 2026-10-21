import prettier from "eslint-plugin-prettier/recommended"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"
import js from "@eslint/js"

export default tseslint.config(
    { ignores: ["dist/", "coverage/", "node_modules/", "visualizer.js"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        plugins: { "unused-imports": unusedImports },
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
        },
    },
)
