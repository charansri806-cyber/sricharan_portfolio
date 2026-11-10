# Sri Charan — Founder Portfolio

A single-page founder portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. The project is configured for static export, so Vercel can build and host it without a separate backend.

## Run locally

### Requirements
- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- Corepack (included with supported Node.js releases)

### Install and start

```bash
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open <http://localhost:3000>.

### Create a production build

```bash
corepack pnpm build
```

The static site is generated in `out/`. The `out/` directory is generated during the build and is intentionally excluded from Git.

## Push to GitHub

1. Create a **new empty repository** on GitHub. Do not initialize it with a README, license, or `.gitignore`.
2. Open a terminal in this project folder (`sri-charan-portfolio`).
3. Run the following commands, replacing `YOUR_GITHUB_USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Initial commit: Sri Charan founder portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sri-charan-portfolio.git
git push -u origin main
```

If Git asks you to sign in, complete the browser-based GitHub authentication. Never put a password or personal access token directly into the repository.

## Deploy on Vercel

1. Sign in at <https://vercel.com/> using GitHub.
2. Select **Add New → Project**.
3. Import the `sri-charan-portfolio` GitHub repository.
4. Vercel should detect **Next.js** automatically. Confirm these settings:

   | Setting | Value |
   |---|---|
   | Framework Preset | Next.js |
   | Root Directory | `./` |
   | Install Command | `corepack pnpm install --frozen-lockfile` |
   | Build Command | `corepack pnpm build` |
   | Output Directory | `out` |
   | Node.js Version | 22.x |

5. Leave environment variables empty; this project does not require any.
6. Select **Deploy**.

After deployment, Vercel will provide a `*.vercel.app` URL. Every push to the connected `main` branch will trigger a new deployment automatically. Pull requests can also receive preview deployments.

> **Important:** Keep the Vercel Root Directory set to the folder containing this `package.json`. Do not set it to `app/`, `public/`, or `out/`.

## Updating the website

Edit the content in `data/` and the components in `components/`. Then test and push your changes:

```bash
corepack pnpm build
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will deploy the new version automatically.

## Project structure

```text
sri-charan-portfolio/
├── app/                 # Next.js app entry point and global styles
├── components/
│   ├── layout/          # Navbar, footer, and layout components
│   ├── sections/        # Portfolio page sections
│   └── ui/              # Reusable UI components
├── data/                # Portfolio content and data
├── public/              # Static images and public assets
├── .gitignore
├── next.config.ts       # Static export configuration
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Notes

- `next.config.ts` uses `output: "export"`. The production site is a static export generated in `out/`.
- No backend, database, environment variables, or secrets are required for the current site.
- Review names, biography, links, and claims for accuracy before making the site public.
