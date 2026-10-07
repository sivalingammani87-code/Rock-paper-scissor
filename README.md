# Wayfarer — Smart Travel Planner

A responsive travel-planning website with English, Spanish, French, and Hindi interface options. Search for and select a destination on an OpenStreetMap preview, explore nearby hotels and attractions, see mapped admission fees when available, get a rough USD hotel budget guide, and create a sample itinerary.

Itinerary suggestions are generated locally in the browser; this project does not connect to a live AI service or travel-booking API. Destination searches use OpenStreetMap's Nominatim service, and nearby listings use Overpass API. Hotel budget figures are general planning estimates, not hotel-specific or live rates. Admission-fee details depend on OpenStreetMap data and may be missing or out of date; confirm prices with each venue before visiting.

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
