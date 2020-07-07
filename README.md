# The Archer Hugo Demo

This is a demo site created for [The Archer](http://www.the-archer.co.uk/), created as a [Hugo](https://gohugo.io/) site.
Using Hugo allows the static site content to be generated from plain [Markdown](https://guides.github.com/features/mastering-markdown/) files (listed in `content/article`), and to manage their ontology (categories, tags, etc.)

## Running locally

- Clone this repository
- Install Hugo ([guide](https://gohugo.io/getting-started/installing/))
- Run `hugo` to generate the static site, or `hugo server` to generate, and serve the site on localhost.

## Deployment

- This repository is hooked up to [Vercel](https://vercel.com/) to automatically deploy when updated: [https://the-archer.now.sh/](https://the-archer.now.sh/).
This means that any article change (which can be committed to this repository via [Forestry](https://forestry.io/)) will automatically appear on the live site (usually within 1m).
