# Games
The Maroon's Games Page.

## Requirements
1. Install `npm` (from node) and `yarn`. 

## Getting started
1. Navigate to project's root directory (the one with `package.json`).
2. Enter `yarn` in terminal. 
3. To start the dev server, enter `yarn start` in the terminal. 
4. To deploy to GitHub Pages, enter `yarn deploy`. 

## Deployment details
`yarn deploy` triggers a next.js build and exports the site as static files to the `out` directory. This directory is then pushed to the gh-pages branch of this repo, which GitHub Pages serves.