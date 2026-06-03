# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is the "Portal de Auditoria Financeira" (Financial Audit Portal), a Next.js application for the "Acordo Judicial para Reparação Integral" (Judicial Agreement for Integral Reparation). The project is currently under development with a construction page and navigation structure in place.

## Architecture

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS integration
- **UI Components**: Configured for shadcn/ui with "new-york" style
- **Fonts**: Geist Sans and Geist Mono from next/font/google
- **Icons**: Lucide React for iconography

## Development Commands

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint with Next.js config

## Project Structure

```
app/
├── layout.tsx          # Root layout with Header component
├── page.tsx           # Home page with construction message
├── globals.css        # Global Tailwind styles
└── [section]/         # Route-based pages (acordo, documentos, etc.)
    └── page.tsx

components/
├── Header.tsx         # Header wrapper component
└── Navbar.tsx         # Navigation with desktop/mobile variants

lib/
└── utils.ts          # Utility functions (cn for className merging)
```

## Navigation Structure

The application has a main navigation with the following sections:

- Início (Home) - `/`
- Acordo (Agreement) - `/acordo`
- Documentos da Auditoria (Audit Documents) - `/documentos`
- Estudo de Risco (Risk Study) - `/estudo-de-risco`
- Avanço das Iniciativas (Initiative Progress) - `/avanco`
- Dúvidas Frequentes (FAQ) - `/duvidas`

## Key Patterns

- **Responsive Design**: Desktop and mobile navigation variants in Navbar component
- **Client Components**: Uses "use client" directive for interactive components
- **Route-based Organization**: Each main section has its own route folder
- **TypeScript Paths**: Uses `@/*` alias for imports from project root
- **Styling**: Uses `cn()` utility function for conditional className merging

## Important Notes

- The application is in Portuguese (pt-BR)
- All pages currently show placeholder content during development
- The project uses Tailwind CSS v4 with PostCSS plugin configuration
- ESLint is configured with Next.js core-web-vitals and TypeScript rules
- The main layout includes a Header component that renders the Navbar
