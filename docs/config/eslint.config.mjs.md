# eslint.config.mjs Configuration Guide

This document provides a detailed explanation of every line in the `eslint.config.mjs` file for the VPBank Hackathon TypeScript + Next.js project.

## File Overview

The `eslint.config.mjs` file uses ESLint's new "Flat Config" format (ESLint 9+). It configures code linting rules for JavaScript and TypeScript files to maintain code quality and consistency.

## File Extension Explanation

**`.mjs`**: Module JavaScript file extension

- **Purpose**: Explicitly indicates this is an ES module
- **Benefit**: Allows use of `import/export` syntax in Node.js
- **Alternative**: `.js` with `"type": "module"` in package.json

## Line-by-Line Breakdown

### Lines 1-3: Module Imports

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
```

**Line 1**: `import { dirname } from "path";`

- **Purpose**: Imports the `dirname` function from Node.js path module
- **Function**: Extracts directory path from a file path
- **Usage**: Used to determine the current directory for ESLint configuration

**Line 2**: `import { fileURLToPath } from "url";`

- **Purpose**: Imports `fileURLToPath` function from Node.js url module
- **Function**: Converts a file URL to a file path
- **Usage**: Converts `import.meta.url` to a usable file path

**Line 3**: `import { FlatCompat } from "@eslint/eslintrc";`

- **Purpose**: Imports compatibility layer for legacy ESLint configs
- **Function**: Allows using old-style ESLint configurations in flat config
- **Necessity**: Enables use of `extends` syntax with existing config packages

### Line 4: Empty Line

```javascript

```

**Purpose**: Blank line for code readability

### Lines 5-6: Directory Path Resolution

```javascript
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

**Line 5**: `const __filename = fileURLToPath(import.meta.url);`

- **Purpose**: Gets the current file's absolute path
- **`import.meta.url`**: ES module equivalent of `__filename` in CommonJS
- **`fileURLToPath()`**: Converts the URL to a file system path
- **Result**: Absolute path to `eslint.config.mjs`

**Line 6**: `const __dirname = dirname(__filename);`

- **Purpose**: Gets the directory containing the current file
- **`dirname()`**: Extracts directory path from file path
- **Result**: Absolute path to the project root directory
- **Usage**: Provides base directory for ESLint configuration

### Line 7: Empty Line

```javascript

```

**Purpose**: Blank line for code readability

### Lines 8-10: Compatibility Layer Setup

```javascript
const compat = new FlatCompat({
  baseDirectory: __dirname,
});
```

**Line 8**: `const compat = new FlatCompat({`

- **Purpose**: Creates a new FlatCompat instance
- **Function**: Bridges old ESLint config format with new flat config
- **Necessity**: Required to use `extends` with existing config packages

**Line 9**: `baseDirectory: __dirname,`

- **Purpose**: Sets the base directory for resolving relative paths
- **Value**: Project root directory (where package.json is located)
- **Usage**: ESLint uses this to resolve configuration dependencies

**Line 10**: `});`

- **Purpose**: Closes the FlatCompat constructor

### Line 11: Empty Line

```javascript

```

**Purpose**: Blank line for code readability

### Lines 12-23: ESLint Configuration Array

```javascript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
```

**Line 12**: `const eslintConfig = [`

- **Purpose**: Starts the ESLint configuration array
- **Format**: Flat config uses an array of configuration objects
- **Variable**: Can be named anything, but `eslintConfig` is descriptive

**Line 13**: `...compat.extends("next/core-web-vitals", "next/typescript"),`

- **Purpose**: Extends Next.js ESLint configurations
- **`...`**: Spread operator to merge configuration objects
- **`compat.extends()`**: Uses compatibility layer for legacy extends syntax

**Configuration 1**: `"next/core-web-vitals"`

- **Purpose**: Includes Core Web Vitals performance rules
- **Rules**: Performance-focused linting rules
- **Features**:
  - Image optimization warnings
  - Font loading best practices
  - Layout shift prevention
  - Accessibility improvements

**Configuration 2**: `"next/typescript"`

- **Purpose**: TypeScript-specific rules for Next.js
- **Rules**: TypeScript and React-specific linting
- **Features**:
  - React Hooks rules
  - TypeScript best practices
  - Next.js specific optimizations
  - Import/export validation

**Line 14**: `{` - Opens custom configuration object

**Lines 15-21**: Ignore Patterns

```javascript
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
```

**Line 15**: `ignores: [`

- **Purpose**: Defines files and directories to exclude from linting
- **Format**: Array of glob patterns

**Line 16**: `"node_modules/**",`

- **Pattern**: All files in node_modules directory and subdirectories
- **Reason**: Third-party code shouldn't be linted
- **Performance**: Significantly speeds up linting

**Line 17**: `".next/**",`

- **Pattern**: All files in Next.js build output directory
- **Reason**: Generated code doesn't need linting
- **Content**: Compiled JavaScript, optimized assets, server files

**Line 18**: `"out/**",`

- **Pattern**: All files in static export output directory
- **Reason**: Generated static files from `next export`
- **Usage**: Only relevant if using static site generation

**Line 19**: `"build/**",`

- **Pattern**: All files in custom build directory
- **Reason**: Any custom build outputs
- **Usage**: Covers alternative build configurations

**Line 20**: `"next-env.d.ts",`

- **Pattern**: Specific file - Next.js TypeScript environment file
- **Reason**: Auto-generated file that shouldn't be linted
- **Content**: TypeScript declarations for Next.js

**Line 21**: `],` - Closes ignores array

**Line 22**: `},` - Closes custom configuration object

**Line 23**: `];` - Closes eslintConfig array

### Line 24: Empty Line

```javascript

```

**Purpose**: Blank line for code readability

### Line 25: Export Statement

```javascript
export default eslintConfig;
```

**Purpose**: Exports the configuration as the default export

- **`export default`**: ES module default export syntax
- **`eslintConfig`**: The configuration array we created
- **Usage**: ESLint automatically imports this configuration

### Line 26: Empty Line

```javascript

```

**Purpose**: Final blank line (good practice)

## Configuration Breakdown by Purpose

### Performance Optimization

```javascript
ignores: [
  "node_modules/**",  // Skip third-party code
  ".next/**",         // Skip build output
  "out/**",           // Skip static exports
  "build/**",         // Skip custom builds
]
```

### Next.js Integration

```javascript
...compat.extends(
  "next/core-web-vitals",  // Performance rules
  "next/typescript"        // TypeScript + React rules
)
```

### TypeScript Support

- Automatic TypeScript file detection
- React Hooks linting
- Import/export validation
- Type-aware linting rules

## What Rules Are Included

### Core Web Vitals Rules

- `@next/next/no-img-element`: Use Next.js Image component
- `@next/next/no-page-custom-font`: Optimize font loading
- `@next/next/no-sync-scripts`: Avoid synchronous scripts

### TypeScript Rules

- `@typescript-eslint/no-unused-vars`: Remove unused variables
- `@typescript-eslint/no-explicit-any`: Avoid `any` type
- `react-hooks/rules-of-hooks`: Proper hook usage

### React Rules

- `react/jsx-key`: Require keys in lists
- `react/no-unescaped-entities`: Escape HTML entities
- `jsx-a11y/*`: Accessibility rules

## Migration from Legacy Config

### Old Format (.eslintrc.json)

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "ignorePatterns": ["node_modules/", ".next/", "out/"]
}
```

### New Format (eslint.config.mjs)

```javascript
export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: ["node_modules/**", ".next/**", "out/**"] }
];
```

## Common Commands

```bash
# Run ESLint
yarn lint
npm run lint

# Fix auto-fixable issues
yarn lint --fix
npx eslint . --fix

# Check specific files
npx eslint src/components/Header.tsx
```

## Troubleshooting

### Issue: "extends" not working

**Problem**: Legacy extends syntax not recognized
**Solution**: Use `FlatCompat` as shown in the configuration

### Issue: TypeScript files not linted

**Problem**: TypeScript rules not applied
**Solution**: Ensure `next/typescript` is in extends array

### Issue: Performance issues

**Problem**: ESLint running slowly
**Solution**: Check that build directories are in ignores array

## Best Practices

1. **Always ignore build directories** for performance
2. **Use Next.js presets** instead of custom rules when possible
3. **Keep configuration simple** and extend proven configurations
4. **Test configuration** with `yarn lint` after changes
5. **Use flat config format** for ESLint 9+ compatibility
