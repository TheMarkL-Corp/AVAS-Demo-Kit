# AVAS Demo Kit site

Two static pages for the AVAS Sales Demo Kit event.

- `index.html`: AVAS Demo Kit page, with setup steps, hardware specs, and PM/BDM contacts.
- `routing-tool.html`: AVAS Routing Tool page.
- `assets/`: images.

## 1. Demo Kit Inquiries

The previous sign-up form has been replaced with direct contact details. Interested teams can reach out directly to:
- **Laurence Liu** (AVAS Product PM) &mdash; `Laurence.Liu`
- **Mark Leorna** (iHealthcare BDM) &mdash; `Mark.Leorna`

## 2. Check the download link

The Routing Tool page links to `https://github.com/advantech/avas-routing-tool/releases/latest`. Search `routing-tool.html` for that text and replace it with the real download address if different.

## 3. Publish on GitHub Pages

1. This repository already holds the site files. Keep the folder structure and the `.nojekyll` file.
2. In the repository, choose Settings, then Pages. Set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site appears at `https://themarkl-corp.github.io/AVAS-Demo-Kit/`.
4. Make the QR code from that address.

## Notes

- Both pages ask search engines not to list them (`noindex`), which prevents indexing while remaining accessible to anyone with the link.
