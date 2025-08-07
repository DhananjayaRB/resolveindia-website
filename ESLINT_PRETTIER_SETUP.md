# ESLint & Prettier Setup Guide

This project is configured with ESLint and Prettier for code quality, consistency, and performance optimization.

## 🚀 Quick Start

### Available Scripts

```bash
# Lint your code
npm run lint

# Fix auto-fixable ESLint issues
npm run lint:fix

# Format your code with Prettier
npm run format

# Check if code is properly formatted
npm run format:check

# Run both linting and formatting checks
npm run lint:all

# Fix both linting and formatting issues
npm run fix:all
```

## 📋 ESLint Rules Overview

### 🔍 Unused Imports & Variables
- **`unused-imports/no-unused-imports`**: Automatically removes unused imports
- **`unused-imports/no-unused-vars`**: Warns about unused variables
- **`@typescript-eslint/no-unused-vars`**: TypeScript-specific unused variable detection

### ⚡ Performance Optimization
- **SonarJS Rules**: Detect code smells and performance issues
- **Array Optimization**: Prefer modern array methods over loops
- **Loop Optimization**: Warn against unnecessary loops
- **Regex Optimization**: Optimize regular expressions

### 🎯 React Best Practices
- **React Hooks**: Enforce rules of hooks and exhaustive dependencies
- **JSX Quality**: Prevent common JSX mistakes
- **Component Optimization**: Encourage efficient component patterns

### 🔒 Security & Quality
- **No eval/alert**: Prevent dangerous code patterns
- **Import Security**: Validate imports and prevent cycles
- **TypeScript Safety**: Enforce type safety and modern TypeScript patterns

### ♿ Accessibility
- **JSX A11y**: Ensure accessibility compliance
- **ARIA Support**: Validate ARIA attributes
- **Semantic HTML**: Encourage proper HTML semantics

## 🎨 Prettier Configuration

### Formatting Rules
- **Semicolons**: Always included
- **Quotes**: Single quotes for strings, double quotes for JSX
- **Line Length**: 80 characters (120 for JSON files)
- **Indentation**: 2 spaces
- **Trailing Commas**: ES5 compatible

### File Exclusions
- Build outputs (`.next`, `build`, `dist`)
- Dependencies (`node_modules`)
- Environment files (`.env*`)
- Generated files (`*.min.js`, `*.min.css`)

## 🔧 VS Code Integration

### Required Extensions
Install these VS Code extensions for the best experience:

1. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
2. **ESLint** (`dbaeumer.vscode-eslint`)
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
4. **TypeScript and JavaScript Language Features** (`ms-vscode.vscode-typescript-next`)

### Auto-Formatting
The project is configured to:
- Format on save
- Fix ESLint issues on save
- Organize imports automatically

## 🛠️ Common Issues & Solutions

### Import Organization
ESLint will automatically organize your imports in this order:
1. Built-in Node.js modules
2. External dependencies
3. Internal modules
4. Parent directory imports
5. Sibling imports
6. Index imports

### Unused Variables
To ignore a variable intentionally, prefix it with underscore:
```javascript
// This will be ignored
const _unusedVariable = 'ignored';

// Function parameters can also be ignored
function example(_unusedParam, usedParam) {
  return usedParam;
}
```

### Performance Warnings
- **Array Methods**: Use `map`, `filter`, `reduce` instead of loops
- **Object Literals**: Prefer object literals over constructors
- **Immediate Returns**: Simplify functions with immediate returns

## 📝 Best Practices

### Code Quality
1. **Use TypeScript**: Leverage type safety for better code quality
2. **Follow React Patterns**: Use hooks correctly and avoid anti-patterns
3. **Optimize Imports**: Remove unused imports regularly
4. **Accessibility First**: Always consider accessibility in your components

### Performance
1. **Avoid Unnecessary Renders**: Use React.memo and useMemo appropriately
2. **Optimize Bundles**: Keep imports specific and avoid barrel exports
3. **Lazy Loading**: Use dynamic imports for code splitting
4. **Image Optimization**: Use Next.js Image component for optimized images

### Maintenance
1. **Regular Linting**: Run `npm run lint:all` before commits
2. **Auto-fix**: Use `npm run fix:all` to automatically fix issues
3. **Review Warnings**: Pay attention to ESLint warnings and fix them
4. **Update Dependencies**: Keep ESLint and Prettier plugins updated

## 🔄 Git Hooks (Optional)

Consider adding pre-commit hooks using `husky` and `lint-staged`:

```bash
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

Add to `package.json`:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

This will automatically lint and format your code before each commit!

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Next.js ESLint Configuration](https://nextjs.org/docs/basic-features/eslint)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
- [TypeScript ESLint](https://typescript-eslint.io/) 