# Wayfarer — Smart Travel Planner

A responsive travel-planning website with English, Spanish, French, and Hindi interface options. Search for and select a destination on an OpenStreetMap preview, enter travel dates and preferences, then create a sample itinerary or choose from the inspiration cards.

Itinerary suggestions are generated locally in the browser; this project does not connect to a live AI service or travel-booking API. Destination searches are sent to OpenStreetMap's Nominatim service to look up places and display the map.

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

The included GitHub Actions workflow builds the site and publishes the generated website files to a dedicated `gh-pages` branch whenever changes are pushed to `main`. To enable public hosting:

1. Push the project files, including `.github/workflows/deploy.yml`, to the `main` branch of `sivalingammani87-code/Rock-paper-scissor`.
2. In the repository, open **Settings → Pages** and wait until the workflow creates the `gh-pages` branch.
3. Under **Build and deployment**, choose **Deploy from a branch**, select **`gh-pages`** and **`/(root)`**, then save.
4. Wait for GitHub Pages to publish the site. Future pushes to `main` automatically update the `gh-pages` branch.

The public website will be available at [https://sivalingammani87-code.github.io/Rock-paper-scissor/](https://sivalingammani87-code.github.io/Rock-paper-scissor/).
