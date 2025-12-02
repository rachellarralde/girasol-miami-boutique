# Repository Guidelines

Contributor essentials for `girasol-store-landing` (Next.js 16 + React 19 + Tailwind 4). Keep updates small, tested, and clearly described.

## Project Structure & Module Organization
- `app/` – App Router entry (`layout.tsx`, `page.tsx`), global styles (`globals.css`), page-scoped styles (`page.module.css`), and reusable UI in `app/components/`.
- `public/` – Static assets served as-is (optimize images before adding).
- Tooling configs: `eslint.config.mjs`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`.
- Build artifacts live in `.next/` (generated); do not commit.

## Build, Test, and Development Commands
- `npm run dev` – Start local dev server with HMR on http://localhost:3000.
- `npm run build` – Production build; use before release to catch route or type issues.
- `npm start` – Serve the last build; mirrors production behavior.
- `npm run lint` – ESLint with Next preset; run before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript; prefer explicit props/return types for exported functions.
- Components: PascalCase filenames inside `app/components/`; route files follow Next defaults (`page.tsx`, `layout.tsx`).
- Styling: Tailwind-first; fall back to module CSS (`*.module.css`) when needed. Keep global styles minimal.
- Formatting: 2-space indentation; favor arrow functions for components; keep imports ordered (react → next → local).
- Client components must declare `"use client"` at the top; otherwise default to server components.

## Testing Guidelines
- No automated test harness is configured yet. When adding one, colocate tests near components (e.g., `app/components/Button.test.tsx`) and add a matching npm script (`npm test`).
- Until a test runner exists, validate changes by: (1) `npm run lint`, (2) `npm run build`, and (3) manual smoke of key flows in the dev server.
- Aim to cover new logic with unit tests once the framework is introduced; target high-risk branches first.

## Commit & Pull Request Guidelines
- Commit history is minimal; adopt Conventional Commits going forward (`feat: add hero CTA`, `fix: align mobile nav`). One logical change per commit.
- PRs should include: purpose summary, linked issue/Task ID (if any), screenshots or clips for UI changes, and a checklist of commands run (lint/build/tests).
- Keep diffs focused; prefer small PRs. Mention any known follow-ups or trade-offs in the PR description.

## Security & Configuration Tips
- Store secrets in `.env.local`; never commit env files. Document required variables in the PR if new ones are introduced.
- Check assets and dependencies for licenses suitable for distribution; avoid embedding unlicensed fonts or images.
