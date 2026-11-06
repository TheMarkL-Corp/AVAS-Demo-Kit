# AVAS Demo Kit site

Two static pages for the AVAS Sales Demo Kit event.

- `index.html`: AVAS Demo Kit page, with the sign-up form.
- `routing-tool.html`: AVAS Routing Tool page.
- `config.js`: the sign-up address (step 1).
- `apps-script/Code.gs`: the script that writes sign-ups into the Google Sheet.
- `assets/`: images.

## 1. Connect the sign-up form to the Google Sheet

1. Open the sheet "AVAS Demo Kit Sign-ups" in Google Sheets.
2. Choose Extensions, then Apps Script. Delete the sample code and paste in `apps-script/Code.gs`. Save.
3. Select the `testWrite` function and choose Run. Approve the permissions when asked. A row for "Test person" appears in the Sign-ups tab. Delete that row.
4. Choose Deploy, then New deployment, then type Web app. Set "Execute as" to Me and "Who has access" to Anyone. Choose Deploy and copy the Web app URL.
5. Open `config.js`, paste the URL between the quotes after `signupUrl:`, and save.

Until the URL is set, the form is disabled and tells people to give their name and team to the presenter.

## 2. Check the download link

The Routing Tool page links to `https://github.com/advantech/avas-routing-tool/releases/latest`. Search `routing-tool.html` for that text and replace it with the real download address. It appears in several places.

## 3. Publish on GitHub Pages

1. This repository already holds the site files. Keep the folder structure and the `.nojekyll` file.
2. In the repository, choose Settings, then Pages. Set Source to "Deploy from a branch", branch `main`, folder `/ (root)`. GitHub Pages from a private repository needs a paid GitHub plan. On a free plan the repository has to be public first.
3. The site appears at `https://<your-username>.github.io/<repository-name>/` after a minute or two.
4. Make the QR code from that address.

## Before the event

- Scan the QR code with a phone that is on mobile data, not office Wi-Fi.
- Register once from that phone and confirm the row appears in the sheet.
- Open the Teams interested tab and confirm the counts update.

## Notes

- GitHub Pages sites are public, even when the repository is private on most plans. Anyone with the address can open the pages. Both pages ask search engines not to list them (`noindex`), which does not stop anyone who has the link.
- The sheet link and the Apps Script web app address are not shown on the pages. Anyone who finds the web app address could post rows to it, so check the sheet before you use the counts.
