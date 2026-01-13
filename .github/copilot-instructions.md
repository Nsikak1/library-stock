# Copilot Instructions for Library Stock

## Project Overview
**Library Stock** is a SvelteKit 2-based web application for ISBN data entry and library book management via spreadsheet uploads. Users can upload Excel/CSV files, input ISBN numbers using a specialized digit-entry interface, and retrieve book metadata from OpenLibrary API to populate spreadsheets.

## Architecture & Data Flow

### Core Components
- **File Upload** (`file-upload.svelte`): Handles paste events and file input for Excel/CSV uploads
- **Spreadsheet Class** (`spreadsheet.ts`): Singleton managing XLSX parsing/manipulation using `xlsx` library
- **ISBN Input** (`input.svelte`): Responsive digit-entry interface with arrow key navigation; validates via `isbn.ts`
- **ISBN Lookup** (`isbn.ts`): Queries OpenLibrary API for book metadata by ISBN

### Key Architectural Pattern: Singleton SpreadSheet
The `SpreadSheet` class uses a static singleton pattern:
```typescript
public static async init(linkToFile: string) // Initialize on file load
public static getInstance() // Access active instance in components
```
Store reference on component mount: `sheet = SpreadSheet.getInstance()` (see `input.svelte:17`)

### Data Flow
1. User pastes/uploads Excel file → `file-upload.svelte` creates blob URL
2. `SpreadSheet.init()` parses file → converts sheet to JSON array
3. `Input.svelte` displays ISBN entry form with `jsonSpreadsheet` prop
4. User enters ISBN → triggers `isbnLookup()` → updates component state
5. `SpreadSheet.insertSpreadsheet()` appends new row → returns updated JSON

## Build & Development Workflow

### Essential Commands
```bash
pnpm dev          # Start Vite dev server (http://localhost:5173)
pnpm build        # Build static site (adapter-static) → `build/` folder
pnpm deploy       # Build + deploy to GitHub Pages at `/library-stock`
pnpm check        # Svelte/TypeScript type checking
pnpm test:unit    # Run Vitest suite (client + server)
```

### Testing Structure
- **Vitest dual-project setup** in `vite.config.ts`:
  - **Client tests** (`*.svelte.spec.ts`): Browser-based via Playwright using `vitest-browser-svelte`
  - **Server tests** (`*.spec.ts`): Node.js environment
- Example: [page.svelte.spec.ts](src/routes/page.svelte.spec.ts#L1) uses `vitest/browser` page queries
- Run specific suite: `pnpm test:unit -- --run --project client` or `--project server`

### Static Adapter Configuration
- Deployment target: `/library-stock` path (see `svelte.config.js:5`)
- Served from `build/` directory after `pnpm build`
- Note: Relative imports require `$app/paths` (see `spreadsheet.ts:1`)

## Project-Specific Patterns & Conventions

### 1. Svelte 5 Runes (React-like Reactivity)
Uses `$state`, `$bindable()`, `$props()` instead of `let:` syntax:
```svelte
let message: string = $state("");           // Reactive variable
let { jsonSpreadsheet = $bindable() } = $props();  // Two-way binding
```

### 2. File Format Support
- Vite config treats Excel files as base64 assets (see `vite.config.ts:6-11`)
- Supported formats: `.xlsx`, `.xls`, `.csv` (validated in `file-upload.svelte:10`)
- Uses `xlsx` library for parsing; `exceljs` in dependencies (not actively used)

### 3. Event Handling: Keyboard Navigation
- `input.svelte:20-53`: Custom keydown listeners on digit-entry inputs
- Arrow keys navigate between fields; Backspace clears; Enter submits
- Prevents default behavior: `ev.preventDefault()`
- Focus management: `eleList.item(index ± 1).focus()`

### 4. External API Integration
- OpenLibrary API called directly from client: `isbnLookup()` in `isbn.ts:1-10`
- Endpoint: `https://openlibrary.org/api/books?bibkeys=ISBN:{isbn}&format=json&jscmd=data`
- Response format: `{ "ISBN:13-digit": { title, authors, ... } }`

## Critical Files & Dependencies

| File | Purpose |
|------|---------|
| [spreadsheet.ts](src/routes/spreadsheet.ts) | Core XLSX parsing/manipulation (singleton) |
| [isbn.ts](src/routes/isbn.ts) | ISBN validation & OpenLibrary lookup utilities |
| [input.svelte](src/routes/input.svelte) | Digit-entry UI with keyboard navigation |
| [+page.svelte](src/routes/+page.svelte) | Main layout; controls FileUpload/Input visibility |
| [vite.config.ts](vite.config.ts) | Base64 asset transform for Excel files |

### Key Dependencies
- **@sveltejs/kit**: Framework
- **xlsx**: XLSX file parsing
- **@zxing/library**: Barcode scanning (imported but may be unused)
- **dexie**: IndexedDB wrapper (imported but check usage)
- **vitest + @vitest/browser-playwright**: Testing

## Common Development Tasks

### Adding Features
1. Place new Svelte components in `src/routes/`
2. Import components with `.ts` extension (e.g., `import SpreadSheet from "./spreadsheet.ts"`)
3. Use `$state` and `$bindable()` for reactivity
4. For API calls, check if OpenLibrary integration pattern applies

### Testing New Code
1. Client component tests: Create `*.svelte.spec.ts` using `vitest-browser-svelte`
2. Utility functions: Create `*.spec.ts` for Node.js environment
3. Run via `pnpm test:unit -- --run` or watch mode: `pnpm test:unit`

### Debugging
- Dev server includes source maps (`sourceMap: true` in `tsconfig.json`)
- Check browser console for `console.log` in `spreadsheet.ts` and `input.svelte`
- Inspect singleton state: `SpreadSheet.getInstance()` in DevTools

## Gotchas & Considerations
- **No backend**: App is fully static with external API calls to OpenLibrary
- **File handling**: Binary files converted to blob URLs; ensure CORS headers on external file sources
- **TypeScript strict mode**: All code requires strict typing (`"strict": true` in `tsconfig.json`)
- **Relative imports**: Use `$app/paths` when needed (not used in current codebase but available)
