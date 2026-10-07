# Wayfarer — Smart Travel Planner

A responsive travel-planning website with English, Spanish, and French interface options. Enter a destination, dates, and preferences to create a sample itinerary, or choose a destination from the inspiration cards.

Itinerary suggestions are generated locally in the browser; this project does not connect to a live AI service or travel-booking API.

## Run locally

Install the dependencies and start the development server:

```bash
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Verify

```bash
npm test -- --watchAll=false
npm run build
```

## Upload to GitHub

Include the `src` and `public` folders, `package.json`, `package-lock.json`, `.gitignore`, and this README. Do not upload `node_modules`, `build`, or `.git`; Git ignores the generated dependencies and build output.

## Publish on GitHub Pages

The included GitHub Actions workflow builds and deploys the site when changes are pushed to the `main` branch. To enable the first deployment:

1. Upload or push the project files, including `.github/workflows/deploy.yml`, to the `main` branch of `sivalingammani87-code/Rock-paper-scissor`.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for the **Deploy to GitHub Pages** workflow to finish.

The public website will be available at [https://sivalingammani87-code.github.io/Rock-paper-scissor/](https://sivalingammani87-code.github.io/Rock-paper-scissor/). It becomes available after GitHub completes its first deployment. Future pushes to `main` deploy automatically.
