# AI Portfolio — Jose Hidalgo

Personal portfolio web application for **Jose Hidalgo** (Software Engineer & AI Product Manager), showcasing AI systems, multi-agent frameworks, RAG architectures, field-built operations software, and technical SOPs.

## Tech Stack

- **Vite 6** (frontend build tool & dev server)
- **React 19** & **TypeScript** (~5.8)
- **React Router v7** (`react-router`)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **shadcn/ui** (Radix UI primitives)
- **Framer Motion** (animations) & **Lucide Icons** (`lucide-react`)

## Local Development & Build

Use `pnpm` (or `npm` if `pnpm` is not in `PATH`):

```bash
# Start local development server (Vite)
pnpm dev

# Type-check and build for production (tsc -b && vite build)
pnpm build

# Preview production build locally
pnpm preview
```

## Routes (`src/main.tsx`)

- `/`: Main portfolio landing page (`src/pages/Landing.tsx`) with `Navbar`, `Hero`, `About`, `Experience`, `Certifications`, `Projects`, `Skills`, `Contact`, and `Footer`.
- `/project/:id`: Project details page (`src/pages/ProjectDetails.tsx`), which displays project metadata and embeds local `/projects/...` apps in an `<iframe>` or links out to external projects.
- `*`: 404 page (`src/pages/NotFound.tsx`).

## Where Content Lives

- **`src/data/`**: All structured portfolio data:
  - `personalInfo.ts`: Name, title, headline description, and contact/social links.
  - `projectsData.ts`: Project entries (`id`, `title`, `description`, `category`, `technologies`, `link`, `featured`), accessed and sorted via `src/services/projectService.ts`.
  - `projectCategories.ts`: Filter categories for the Projects section.
  - `experienceData.ts`: Experience achievements and role accomplishments (Hive Mind Solutions and Patry Group of Companies).
  - `certificationsData.ts`: Professional certificates, Claude Academy badges, and Ontario/trades credentials.
  - `skillsData.ts` & `educationData.ts`: Skills categories and education entries.
- **`public/projects/`**: Standalone static HTML/CSS/JS subprojects served under `/projects/<folder>/` (`ai-career-roadmap`, `ductless-sop`, `furnace-sop`, `gas-tech-dashboard`, `gas-tech-unit3`, `wall-prep-sop`), plus a static hub index at `public/projects/index.html`.

## Publishing Note

The live site's publish/deployment method is not configured or documented in this repository (`dist/` is gitignored and there are no CI/CD workflow files or deploy scripts in the repo).
