# Grey Zone

Source for [grey.zone.id](https://grey.zone.id), the website for Grey Zone's Mac desktop apps: Multi-Timer and Templatr. GitHub Pages publishes it from this repository.

## Run locally

The site is plain static HTML with no build step. Serve the repository root over HTTP:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Any static file server works, for example `npx serve .`.

### Why you can't just open `index.html`

The pages use root-relative paths such as `/assets/grey-zone.png` and `/multi-timer`. If you open a file directly (`file://...`), the browser looks for those paths at the root of your disk, so images, styles and links break. A local server makes them resolve the same way they do in production.

### Jekyll

You don't need Jekyll to preview the site. GitHub Pages passes the files through Jekyll, but none of them have Jekyll front matter, so they're published unchanged.

## Structure

| Path | Contents |
| --- | --- |
| `index.html` | Home page |
| `multi-timer/`, `templatr/` | App pages |
| `src/` | Shared stylesheet and script |
| `assets/` | Icons and images |
| `download/` | Old Multi-Timer releases and `releases.json` |
| `CNAME` | Custom domain for GitHub Pages |
