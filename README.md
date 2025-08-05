# sena-nextjs-starter

This is a **Next.js** template project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It provides a modern starting point for building robust web applications with Next.js 14+, TypeScript, Tailwind CSS, ESLint, and commit linting.

## Features

- **App Directory Structure**: Uses Next.js `app` directory for routing and layouts.
- **TypeScript**: Type-safe development out-of-the-box.
- **Tailwind CSS**: Utility-first CSS with custom theming (`app/globals.css`).
- **Geist Font**: Includes [Geist](https://vercel.com/font) and Geist Mono fonts for clean, modern typography.
- **Optimized Images**: Uses `next/image` for performant image handling and assets.
- **Linting**: ESLint configuration for Next.js + TypeScript (`eslint.config.mjs`), and commit linting (`commitlint.config.js`).
- **Environment Variable Management**: Via [`@t3-oss/env-nextjs`](https://github.com/t3-oss/env-nextjs) in `env.ts`.
- **Utility Functions**: Handy helpers like `cn` for className merging (`lib/utils.ts`).
- **Ready for Vercel Deployment**: Configured for instant deployment on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the template in action.

You can start editing the main page by modifying [`app/page.tsx`](app/page.tsx). The page auto-updates as you edit the file.

## Project Structure

```
├── app/
│   ├── globals.css     # Global styles (includes Tailwind & custom theme)
│   ├── layout.tsx      # Root layout, font configuration
│   └── page.tsx        # Main page component
├── lib/
│   └── utils.ts        # Utility functions
├── env.ts              # Environment variable validation
├── next.config.ts      # Next.js config
├── eslint.config.mjs   # ESLint config
├── postcss.config.mjs  # PostCSS config (Tailwind)
├── commitlint.config.js# Commitlint config
└── public/             # Static assets
```

## Customization

- **Theme & Fonts**: Easily adjust theme colors and fonts via `app/globals.css` and `app/layout.tsx`.
- **Linting**: Modify linting rules in `eslint.config.mjs` and commit message rules in `commitlint.config.js`.
- **Environment Variables**: Add client/server/runtime variables in `env.ts` for type-safe usage.

## Learn More

To learn more about Next.js and related technologies:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.
- [Next.js GitHub](https://github.com/vercel/next.js) - Source and community.

## Deploy on Vercel

Deploy your Next.js app instantly using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Template maintained by [sena25519](https://github.com/sena25519). Contributions welcome!**
