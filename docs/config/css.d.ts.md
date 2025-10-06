# css.d.ts Configuration Guide

This document provides a detailed explanation of every line in the `src/types/css.d.ts` file for the VPBank Hackathon TypeScript + Next.js project.

## File Overview

The `css.d.ts` file contains TypeScript module declarations that enable type safety when importing CSS and SCSS files. It tells TypeScript how to handle CSS module imports and provides proper typing for CSS-in-JS workflows.

## File Location

**Path**: `src/types/css.d.ts`

- **Directory**: `src/types/` - Contains custom TypeScript declarations
- **Purpose**: Extends TypeScript's understanding of CSS file imports
- **Scope**: Global declarations that apply to the entire project

## Line-by-Line Breakdown

### Lines 1-4: Regular CSS Module Declaration

```typescript
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
```

**Line 1**: `declare module '*.css' {`

- **Purpose**: Declares how TypeScript should handle `.css` file imports
- **`declare module`**: TypeScript syntax for ambient module declarations
- **`'*.css'`**: Wildcard pattern matching any file ending in `.css`
- **Scope**: Applies to all CSS files in the project

**Line 2**: `const content: { [className: string]: string };`

- **Purpose**: Defines the type of the imported CSS content
- **`const content`**: Variable representing the imported CSS object
- **`{ [className: string]: string }`**: Index signature type
  - **Key**: `className` (string) - CSS class name
  - **Value**: `string` - Generated CSS class name (often hashed)
- **Usage**: Enables `styles.className` syntax with type checking

**Line 3**: `export default content;`

- **Purpose**: Declares that CSS files have a default export
- **Type**: The `content` object defined above
- **Usage**: Allows `import styles from './Component.css'`

**Line 4**: `}`

- **Purpose**: Closes the module declaration

### Line 5: Empty Line

```typescript

```

**Purpose**: Blank line for readability between declarations

### Lines 6-9: CSS Modules Declaration

```typescript
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
```

**Line 6**: `declare module '*.module.css' {`

- **Purpose**: Specific declaration for CSS Modules files
- **Pattern**: `*.module.css` - Files following CSS Modules naming convention
- **Difference**: More explicit naming for CSS Modules vs regular CSS

**Line 7**: `const classes: { [key: string]: string };`

- **Purpose**: Defines the type for CSS Modules imports
- **`const classes`**: Variable name (more semantic than `content`)
- **Type**: Same index signature as regular CSS
- **CSS Modules**: Class names are automatically scoped/hashed

**Line 8**: `export default classes;`

- **Purpose**: Default export for CSS Modules
- **Usage**: `import styles from './Component.module.css'`

**Line 9**: `}`

- **Purpose**: Closes the CSS Modules declaration

### Line 10: Empty Line

```typescript

```

**Purpose**: Blank line for readability

### Lines 11-14: SCSS Declaration

```typescript
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
```

**Line 11**: `declare module '*.scss' {`

- **Purpose**: Declaration for SCSS/Sass files
- **Pattern**: `*.scss` - Sass files with SCSS syntax
- **Support**: Enables TypeScript support for Sass stylesheets

**Line 12**: `const content: { [className: string]: string };`

- **Purpose**: Same type definition as regular CSS
- **Consistency**: Maintains same interface across CSS and SCSS

**Line 13**: `export default content;`

- **Purpose**: Default export for SCSS files
- **Usage**: `import styles from './Component.scss'`

**Line 14**: `}`

- **Purpose**: Closes the SCSS declaration

### Line 15: Empty Line

```typescript

```

**Purpose**: Blank line for readability

### Lines 16-19: SCSS Modules Declaration

```typescript
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
```

**Line 16**: `declare module '*.module.scss' {`

- **Purpose**: Declaration for SCSS Modules files
- **Pattern**: `*.module.scss` - SCSS files using CSS Modules convention
- **Combination**: SCSS preprocessing + CSS Modules scoping

**Line 17**: `const classes: { [key: string]: string };`

- **Purpose**: Type definition for SCSS Modules
- **Consistency**: Same interface as CSS Modules

**Line 18**: `export default classes;`

- **Purpose**: Default export for SCSS Modules
- **Usage**: `import styles from './Component.module.scss'`

**Line 19**: `}`

- **Purpose**: Closes the SCSS Modules declaration

## What This File Enables

### 1. CSS File Imports

```typescript
// Without css.d.ts, this would cause TypeScript errors:
import styles from './Header.css';

// With css.d.ts, this works with full type safety:
const className = styles.header; // TypeScript knows this is a string
```

### 2. CSS Modules Support

```typescript
// CSS Modules with automatic scoping:
import styles from './Component.module.css';

// TypeScript provides IntelliSense for class names:
<div className={styles.container}>  // Type-safe
<div className={styles.button}>     // Auto-completion
```

### 3. SCSS Integration

```typescript
// SCSS files work seamlessly:
import styles from './styles.scss';
import moduleStyles from './Component.module.scss';
```

### 4. Type Safety

```typescript
// TypeScript catches typos:
import styles from './Component.module.css';

// ✅ Correct
<div className={styles.header} />

// ❌ TypeScript error - property doesn't exist
<div className={styles.headerr} />  // Typo caught at compile time
```

## CSS Modules vs Regular CSS

### Regular CSS (`*.css`)

```css
/* styles.css */
.header {
  background: blue;
}
```

```typescript
// Component.tsx
import styles from './styles.css';
// styles.header might conflict with other CSS
```

### CSS Modules (`*.module.css`)

```css
/* Component.module.css */
.header {
  background: blue;
}
```

```typescript
// Component.tsx
import styles from './Component.module.css';
// styles.header becomes something like "Component_header__2x3k1"
```

## Integration with Build Tools

### Next.js Integration

Next.js automatically:

1. **Processes CSS Modules** (files with `.module.css`)
2. **Generates unique class names** to prevent conflicts
3. **Provides the mapping** from original to generated names

### TypeScript Integration

This declaration file:

1. **Tells TypeScript** how to handle CSS imports
2. **Provides type safety** for class name access
3. **Enables IntelliSense** in your IDE

## Common Usage Patterns

### Component with CSS Modules

```typescript
// Component.tsx
import React from 'react';
import styles from './Component.module.css';

export default function Component() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello World</h1>
      <button className={styles.button}>Click me</button>
    </div>
  );
}
```

### Conditional Classes

```typescript
import styles from './Component.module.css';

const isActive = true;
const className = `${styles.button} ${isActive ? styles.active : ''}`;
```

### Dynamic Class Names

```typescript
import styles from './Component.module.css';

const variant = 'primary';
const buttonClass = styles[`button-${variant}`]; // Type-safe dynamic access
```

## Troubleshooting

### Issue: CSS imports show TypeScript errors

**Problem**: TypeScript doesn't recognize CSS file imports
**Solution**: Ensure `css.d.ts` is included in `tsconfig.json`

### Issue: No IntelliSense for CSS classes

**Problem**: IDE doesn't provide auto-completion
**Solution**: Check that TypeScript language server recognizes the declarations

### Issue: CSS Modules not working

**Problem**: Class names not being scoped
**Solution**: Ensure files use `.module.css` extension and Next.js is processing them

## Best Practices

### ✅ Do

- Use CSS Modules for component-specific styles
- Keep this file in `src/types/` directory
- Include the file in your `tsconfig.json`
- Use semantic variable names (`classes` vs `content`)

### ❌ Don't

- Modify the type definitions unless you understand the implications
- Use `any` type for CSS imports
- Ignore TypeScript errors related to CSS imports

## Related Configuration

### tsconfig.json

```json
{
  "include": [
    "src/types/**/*.d.ts",  // Includes this file
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

### Next.js CSS Support

Next.js automatically supports:

- CSS Modules (`.module.css`)
- Global CSS (in `_app.tsx` only)
- SCSS/Sass (with `sass` package installed)

## Alternative Approaches

### Styled Components

```typescript
// Instead of CSS files, you might use:
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
`;
```

### Tailwind CSS

```typescript
// Or utility classes:
<div className="bg-blue-500 text-white p-4">
  Content
</div>
```

This `css.d.ts` file provides the foundation for type-safe CSS-in-TypeScript workflows, ensuring your styles are as robust and maintainable as your JavaScript code.
