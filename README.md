# Next.js Conf 2024

_Automatically synced with your [v0.dev](https://v0.dev) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/heimers-projects/v0-next-js-conf-2024)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/Z9328RxtugE)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/heimers-projects/v0-next-js-conf-2024](https://vercel.com/heimers-projects/v0-next-js-conf-2024)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/Z9328RxtugE](https://v0.dev/chat/projects/Z9328RxtugE)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

---

# Project Rules

## Coding Style

- Use TypeScript for all React components and logic.
- Prefer functional components over class components.
- Use hooks for state and side effects.
- Follow the existing folder structure for components, hooks, and utilities.
- Use Tailwind CSS utility classes for styling.
- Keep components small and focused; split into smaller components when necessary.
- Use named exports unless a file only exports a single component.
- Write clear, descriptive variable and function names.
- Add JSDoc comments for complex functions or utilities.
- Keep imports organized: external libraries first, then internal modules.

## Commit Messages

- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Example commit message: `feat(button): add loading state to Button component`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Scope: use the affected part of the codebase (e.g., `button`, `form`, `hooks`).
- Subject: concise description of the change.

---

# Project Memories

## Tech Stack

- **Framework:** Next.js (React, TypeScript)
- **Styling:** Tailwind CSS
- **Component Library:** Custom components in `/components/ui/`
- **Package Manager:** pnpm
- **Other:** PostCSS, Shadcn UI patterns

## Design Decisions

- Use the `/components/ui/` directory for all reusable UI components, following atomic design principles.
- Global styles are managed in `app/globals.css` and `styles/globals.css`.
- Theme management is handled by `components/theme-provider.tsx`.
- All hooks are placed in the `/hooks/` directory for reusability.
- Use the `/lib/` directory for utility functions.
- Static assets are stored in the `/public/` directory.
- Project uses strict TypeScript settings for type safety.
- Follows Conventional Commits for commit messages and changelog generation.

---

# Project Index

This section provides an overview of the project structure and the purpose of key files and directories.

## Root

- `package.json` — Project dependencies and scripts
- `pnpm-lock.yaml` — Lockfile for pnpm package manager
- `README.md` — Project overview and setup instructions
- `next.config.mjs` — Next.js configuration
- `postcss.config.mjs` — PostCSS configuration
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration

## Directories

- `/app/` — Next.js app directory (entry point, global layout, and pages)
  - `globals.css` — Global styles
  - `layout.tsx` — Root layout component
  - `page.tsx` — Main page component
- `/components/` — Shared and UI components
  - `/ui/` — Reusable UI components (buttons, forms, dialogs, etc.)
  - `theme-provider.tsx` — Theme context and provider
  - `heimer-blocks.tsx` — Custom blocks/components
- `/hooks/` — Custom React hooks
- `/lib/` — Utility functions and helpers
- `/public/` — Static assets (images, logos, etc.)
- `/styles/` — Additional global styles

## Other

- `.md` files — Documentation and project notes

---

## Notable Features

- **3D Interactive Scene**: The main page renders a 3D scene using React Three Fiber, with custom logic for displaying animated box letters and interactive controls. See `heimer-blocks.tsx` for implementation details.
- **UI Component Library**: The `/components/ui/` directory contains a comprehensive set of reusable UI components, based on shadcn/ui and Radix UI (accessible, themeable, and composable).
- **Custom Hooks**: The `/hooks/` directory provides reusable logic, such as mobile detection and toast notifications.
- **Utility Functions**: The `/lib/utils.ts` file exports a `cn` function for merging Tailwind and clsx class names, simplifying dynamic styling.
