# Field Notes — Blog Website

A responsive, modern blog built with plain HTML, CSS, and JavaScript (no frameworks, no build step).

## Structure
```
field-notes-blog/
├── index.html       # all pages (home + article) in one file, view-switched by JS
├── css/styles.css   # theme, layout, responsive rules
├── js/script.js     # blog data, search, filtering, pagination, comments, dark mode
└── README.md
```

## Run it
Just open `index.html` in a browser — no server or build tools required.

## Features
- Dark theme by default (violet/mint gradient accent) with a light mode toggle — saved across visits
- Featured post hero, responsive card grid, category filter chips, live search
- "Load more" pagination
- Full article detail view: tags, related articles, social share links (X / LinkedIn / copy link)
- Comment form (stored locally in your browser per article)
- Fully responsive nav with mobile menu, and a multi-column footer with newsletter signup

## Customize
- **Content**: edit the `POSTS` array at the top of `js/script.js` (title, category, tags, excerpt, body HTML, author, date).
- **Images**: cards currently use an emoji + gradient placeholder (`.card-img`, `.article-hero`). Swap in real photos by adding `<img>` tags or background-image styles.
- **Colors/fonts**: all theme tokens are CSS variables at the top of `css/styles.css` under `:root`.
