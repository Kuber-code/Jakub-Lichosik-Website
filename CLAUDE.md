@AGENTS.md

# Project Memory — Jakub Lichosik Website

This file is loaded automatically into every Claude Code conversation in this workspace.

## Three-repo workspace

| Role | Absolute path | What lives there |
|---|---|---|
| **Agents (shared)** | `D:\Repos\my local repos\agents` | Agent + skill definitions, workflows |
| **Code repo (this)** | `D:\Repos\my local repos\Jakub Lichosik Website` | Next.js 14 website source |
| **Vault (docs)** | `D:\Repos\my local repos\Jakub Lichosik Website docs` | Obsidian vault: docs + task files |

## Project context

**Subject**: Jakub Lichosik — Software Engineer / DevOps / SRE / Scrum Master
**Deliverable**: Personal brand landing page / tech portfolio (single-page SPA-like)
**Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Framer Motion, next-themes
**GitHub repo**: https://github.com/Kuber-code/Jakub-Lichosik-Website
**Target audience**: hiring managers, tech leads, CTOs, IT recruiters, open-source community
**Live domain**: TBD (Vercel deployment planned)

## Tech stack (canonical)

```
Framework:    Next.js 14 (App Router, TypeScript)
Styling:      Tailwind CSS v3 + CSS custom properties
Animations:   Framer Motion 11+
Theme:        next-themes (dark/light mode)
Icons:        Lucide React
Fonts:        Inter (body), JetBrains Mono (code/terminal)
Data:         src/data/*.ts — centralized, no CMS
```

## Design tokens (canonical)

Dark mode (default): bg `#0a0a0f`, cards `#111118`, accent-cyan `#00d4ff`, accent-purple `#7c3aed`, accent-green `#10b981`
Light mode: bg `#ffffff`, cards `#f8fafc`, text `#0f172a`, accent-cyan `#0ea5e9`

## Content structure

All content lives in `src/data/`:
- `experience.ts` — work history items
- `projects.ts` — project cards (public, private, NDA, in-progress)
- `skills.ts` — skill bars + tech badges
- `personal.ts` — bio, languages, interests, contact links

## Task file location

```
D:\Repos\my local repos\Jakub Lichosik Website docs\03 - Development\tasks\T-NNN-<section>.md
```

## Key conventions

- RTK: use `rtk git`, `rtk npm` etc. for token savings
- No comments in code unless WHY is non-obvious
- Data edits: always in `src/data/*.ts`, never hardcoded in components
- Paths: absolute Windows paths with backslashes cross-repo; forward slashes within `src/`

## Content requiring owner confirmation before publish

- Exact dates/description of 2-year freelancing in Switzerland
- PO/PM role at tracker.beskid-lang.org (Beskid programming language project)
- Scrum Expert + DevOps + Developer at ipi.io
- Extended hobby list (Ableton, festivals, singing)
- Which private projects/clients can be named publicly
- LinkedIn URL
- Final portrait photo (CV photo not to be used as-is)
