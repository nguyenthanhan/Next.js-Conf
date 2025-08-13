# Changelog

All notable changes to the project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2025-08-12
### Removed
- Removed shadcn/Radix UI components — refactored UI primitives
- Removed duplicate global stylesheet `styles/globals.css` (consolidated into `app/globals.css`)
- Removed unused Tailwind color palettes (`chart`, `sidebar`) and their CSS variables
- Removed direct `autoprefixer` dependency (bundled via `@tailwindcss/postcss`)

### Changed
- Pruned unused dependencies and updated package versions
- Updated CI/workflows (Vercel action outputs, deployment debug, release flow)
- Shortened and streamlined `README.md` (condensed features, setup, and deployment sections)
- Migrated Tailwind CSS from v3 to v4:
  - Switched to `@import "tailwindcss"` entrypoint (replacing `@tailwind base/components/utilities`)
  - Adopted CSS-first tokens via `@theme` and moved keyframe animations to CSS
  - Simplified `tailwind.config.ts` (removed `content`, `extend.colors`, `borderRadius`, animations)
  - Fixed `darkMode` typing to `"class"`
  - Resolved build error for unknown utility `border-border` by defining v4 color tokens
- Updated PostCSS config to use `@tailwindcss/postcss`

### Added
- Added/updated path aliases for cleaner imports
- Integrated analytics (Vercel Analytics and Speed Insights) in `app/layout.tsx`
- Added `pnpm.neverBuiltDependencies` in `package.json` to skip building native modules (e.g. `@vercel/speed-insights`, `sharp`)

### Docs
- Clarified quick start steps and deployment notes
- Documented Tailwind v4 migration in this changelog

---

_This changelog will be updated with each new release to document all changes, improvements, and new features._
