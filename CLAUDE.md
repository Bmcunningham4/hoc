# CLAUDE.md

Notes for working in this repo.

- The actual app lives in `app/` (React + Vite + TypeScript). Run all npm commands from there.
- Default branch is `main`.
- Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `app/` and deploys `app/dist` to GitHub Pages.
- Deployed at https://bmcunningham4.github.io/hoc/
