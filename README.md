# remove-youtube-short

A Firefox extension that hides YouTube Shorts from the UI and redirects any Shorts URLs back to YouTube.

## What it does

- Hides the Shorts section from the YouTube home feed and sidebar
- Hides Shorts links and thumbnails throughout the site
- Redirects `youtube.com/shorts/*` URLs away automatically

## Setup

Install Deno: https://docs.deno.com/runtime/getting_started/installation/

## Build

```bash
deno task build
```

This bundles `src/content.ts` and copies `manifest.json` into `dist/`.

## Load in Firefox

1. Go to `about:debugging` in Firefox
2. Click **This Firefox** > **Load Temporary Add-on**
3. Select any file inside the `dist/` folder