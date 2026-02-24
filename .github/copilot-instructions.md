# Copilot Instructions for Library Stock

## Project Overview
**Library Stock** is a monorepo SvelteKit 2 frontend + NestJS backend application for ISBN data entry and library book management. Users upload Excel/CSV files, input ISBNs via digit-entry interface, fetch metadata from OpenLibrary API, and persist data to PostgreSQL via NestJS backend. Includes LiveKit video conferencing integration for multi-user sessions.

**Workspace structure:**
- `/library_stock` - SvelteKit 2 frontend (static deployment to GitHub Pages `/library-stock` path)
- `/library_project/library_backend` - NestJS backend (runs on port 3000, connected to PostgreSQL)

## Architecture & Data Flow

### Frontend Data Layer
- **Dexie IndexedDB** (`db.ts`): Client-side storage with schema for spreadsheet rows; syncs with backend when online
- **Global State** (`globalState.svelte.ts`): Reactive book details view + online status indicator
- **SpreadSheet Singleton** (`spreadsheet/sheetUtils.svelte.ts`): XLSX parsing and in-memory manipulation
- **File Upload** (`file-upload.svelte`): Paste/drag/input events → blob URL → SpreadSheet.init()

### Backend Data Layer
- **NestJS Database Module** (`/backend/src/database/`): TypeORM service managing `DBSpreadsheetRow` PostgreSQL entity
- **LiveKit Module** (`/backend/src/livekit/`): Token generation for video sessions (calls external LiveKit cloud)
- **Chat Gateway** (`/backend/src/chat/`): WebSocket-based messaging (infrastructure present but verify active usage)

### End-to-End ISBN Data Flow
1. User pastes Excel → `file-upload.svelte` creates blob URL
2. `SpreadSheet.init()` parses XLSX → converts sheet to JSON array (`ISpreadsheetData[]`)
3. `Input.svelte` displays digit-entry form; user types ISBN
4. `isbn.ts` validates ISBN format + calls OpenLibrary API directly from client
5. Metadata returned → component state updates
6. User submits → `SpreadSheet.updateSpreadsheet()` appends row to in-memory state + Dexie IndexedDB
7. **Backend sync** (if implemented): POST to `/database/` endpoint with row data → PostgreSQL saves

## Build & Development Workflow

### Frontend Commands (from `/library_stock`)
```bash
pnpm dev          # Start Vite dev server (http://localhost:5173)
pnpm build        # Build static site (adapter-static) → `build/` folder
pnpm deploy       # Build + deploy to GitHub Pages at `/library-stock`
pnpm check        # Svelte/TypeScript type checking
pnpm test:unit    # Run Vitest suite
```

### Backend Commands (from `/library_project/library_backend`)
```bash
pnpm install      # Install dependencies
pnpm run start    # Production mode (requires PostgreSQL + env vars)
pnpm run start:dev # Watch mode with hot reload
pnpm test         # Run test suite
```

### Backend Environment Setup
Backend requires PostgreSQL connection. Set environment variables:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=<user>
DB_PASSWORD=<pass>
DB_DATABASE=library_db
PORT=3000  # Backend server port
DEV=true   # Enable CORS to '*' instead of restricted origin
```

### Frontend Testing & Deployment
- **Vitest dual-project setup** in `vite.config.ts`: Client tests via Playwright, server tests in Node.js
- **Static adapter**: Deployment path is `/library-stock`; built to `build/` directory
- HTTPS required for development (certs in workspace: `localhost+1.pem`, `localhost+1-key.pem`)

## Project-Specific Patterns & Conventions

### 1. Svelte 5 Runes (React-like Reactivity)
Uses `$state`, `$bindable()`, `$props()` instead of `let:` syntax:
```svelte
let message: string = $state("");                                    // Reactive variable
let { jsonSpreadsheet = $bindable() } = $props();                   // Two-way binding
let { receivedIsbn = $bindable() } = $props();                      // Component prop binding
```

### 2. Database & Persistence
- **Frontend**: Dexie IndexedDB (`db.ts`) stores `ISpreadsheetData` rows with ISBN as unique index
- **Backend**: TypeORM entity `DBSpreadsheetRow` maps to PostgreSQL (see `database/entities/database.entity.ts`)
- **Schema alignment**: Frontend `ISpreadsheetData` and backend entity share 10-field structure:
  - `accession` (string), `book_name`, `isbn` (unique), `book_type`, `author`, `published`, `num_of_pages`, `image_links`, `language`

### 3. Singleton Pattern for SpreadSheet Class
`SpreadSheet` class uses static instance pattern (in `spreadsheet/sheetUtils.svelte.ts`):
```typescript
public static async init(fileUrl: string): Promise<SpreadSheet>   // Initialize on file load
public static getInstance(): SpreadSheet                          // Access active instance
```
Components retrieve instance on mount: `let sheet = SpreadSheet.getInstance()` (e.g., `SpreadSheet.svelte:line 15`)

### 4. Backend API Endpoints
- **POST `/database/`**: Create spreadsheet row (body: `Partial<DBSpreadsheetRow>`)
- **GET `/database/`**: Fetch all rows
- **GET `/livekit/token?room=<name>&userId=<id>`**: Generate LiveKit session token
- **WebSocket `/chat`**: Real-time messaging via Socket.io (see `chat.gateway.ts`)

### 5. File Format Support
- Vite config (lines 6-11) treats `.numbers`, `.xlsx`, `.xls` as base64 assets
- `file-upload.svelte` validates `*.xlsx`, `*.xls`, `*.csv` only
- Uses `xlsx` library for parsing; `exceljs` in dependencies (not actively used)
- Drag/drop and paste events create blob URLs passed to `SpreadSheet.init()`

### 6. Event Handling: Keyboard Navigation (ISBN Entry)
- `input.svelte` digit entry: 13 or 10 separate input fields, each `maxlength="1"`
- Arrow keys navigate between fields; Backspace clears + moves left
- Enter submits ISBN; custom listeners prevent default browser behavior
- Double-click on spreadsheet table cell opens `contentEditable` mode for accession field

## Critical Files & Dependencies

### Frontend Key Files

| File | Purpose |
|------|---------|
| [src/routes/db.ts](src/routes/db.ts) | Dexie IndexedDB schema definition + entity interfaces |
| [src/routes/globalState.svelte.ts](src/routes/globalState.svelte.ts) | Global reactive state: `bookDetails`, `onlineState` |
| [src/routes/spreadsheet/sheetUtils.svelte.ts](src/routes/spreadsheet/sheetUtils.svelte.ts) | Singleton SpreadSheet class for XLSX parsing |
| [src/routes/spreadsheet/SpreadSheet.svelte](src/routes/spreadsheet/SpreadSheet.svelte) | Table rendering + double-click editing for accession field |
| [src/routes/input.svelte](src/routes/input.svelte) | ISBN digit entry UI (13 or 10 input fields) |
| [src/routes/isbn.ts](src/routes/isbn.ts) | ISBN validation + OpenLibrary API lookups |
| [src/routes/file-upload.svelte](src/routes/file-upload.svelte) | Paste/drag-drop/input events → blob URL → SpreadSheet.init() |
| [src/routes/+page.svelte](src/routes/+page.svelte) | Main layout; toggles FileUpload/Input/SpreadSheet visibility |
| [vite.config.ts](vite.config.ts) | Base64 asset transform for Excel files + HTTPS dev certs |

### Backend Key Files

| File | Purpose |
|------|---------|
| [src/database/database.service.ts](../library_project/library_backend/src/database/database.service.ts) | TypeORM CRUD operations for `DBSpreadsheetRow` |
| [src/database/entities/database.entity.ts](../library_project/library_backend/src/database/entities/database.entity.ts) | PostgreSQL entity definition (10 columns) |
| [src/database/database.controller.ts](../library_project/library_backend/src/database/database.controller.ts) | REST endpoints for `/database/` routes |
| [src/livekit/livekit.controller.ts](../library_project/library_backend/src/livekit/livekit.controller.ts) | Token generation: `GET /livekit/token` |
| [src/livekit/livekit.service.ts](../library_project/library_backend/src/livekit/livekit.service.ts) | Calls LiveKit cloud API with credentials |
| [src/app.module.ts](../library_project/library_backend/src/app.module.ts) | Root module; imports Database + LiveKit + Chat modules |
| [src/main.ts](../library_project/library_backend/src/main.ts) | CORS config + PostgreSQL connection setup |

### Key Dependencies

**Frontend:**
- `@sveltejs/kit` (v2.49.1): Framework
- `xlsx` (v0.20.3, via CDN): XLSX parsing
- `dexie` (v4.2.1): IndexedDB wrapper
- `livekit-client` (v2.17.0): Video conferencing
- `socket.io-client`: WebSocket client for chat

**Backend:**
- `@nestjs/core`, `@nestjs/common`: NestJS framework
- `@nestjs/typeorm`: ORM integration
- `postgres` driver: Database
- `@livekit/server-sdk`: LiveKit token generation
- `@nestjs/websockets`: Chat gateway support

## Common Development Tasks

### Adding Frontend Features
1. Place new Svelte components in `src/routes/`
2. Use `$state` for reactive variables; `$bindable()` for component two-way binding
3. Import singleton SpreadSheet instance on mount: `let sheet = SpreadSheet.getInstance()`
4. For API calls, use OpenLibrary pattern (client-side) or POST to `/database/` endpoint (server-side)

### Adding Backend Endpoints
1. Create new `.controller.ts` with `@Controller('route-name')` decorator
2. Import service via constructor injection: `constructor(private service: ServiceName) {}`
3. Define route handler with `@Get()`, `@Post()`, etc. decorators
4. For database access, inject `@InjectRepository(Entity)` in service
5. Example: [livekit.controller.ts](../library_project/library_backend/src/livekit/livekit.controller.ts#L1-L15)

### Testing New Code
1. Client component tests: Create `*.svelte.spec.ts` using `vitest-browser-svelte`
   - Use `import { page } from 'vitest/browser'` for DOM queries
   - Example: [page.svelte.spec.ts](src/routes/page.svelte.spec.ts)
2. Backend tests: Create `.spec.ts` file in same directory as code
3. Run via `pnpm test:unit -- --run` or watch mode: `pnpm test:unit`

### Debugging
- **Frontend**: Dev server includes source maps; inspect singleton: `SpreadSheet.getInstance()` in DevTools
- **Backend**: Enable logging in `app.module.ts` TypeORM config (`logging: true`)
- **Database sync**: Check Dexie IndexedDB in browser DevTools under Application tab

## Gotchas & Considerations
- **Monorepo**: Frontend and backend are separate projects; install dependencies in each via `pnpm install`
- **Backend startup**: Requires PostgreSQL running and environment variables set (`DB_*` vars)
- **CORS configuration**: Dev mode enables `'*'` origin; production uses GitHub Pages origin only
- **Data synchronization**: Frontend uses Dexie for offline storage; backend sync is partial (verify implementation status)
- **TypeScript strict mode**: All code requires strict typing (`"strict": true` in `tsconfig.json`)
- **File upload**: Excel files converted to blob URLs; ensure CORS headers on external file sources
- **LiveKit**: Requires external credentials (see environment setup); calls `library-xs8xmdmu.livekit.cloud`
- **ISBN uniqueness**: Backend enforces unique ISBN in `DBSpreadsheetRow` entity; frontend should prevent duplicates in Dexie
