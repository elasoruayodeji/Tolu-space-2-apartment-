# Tolu's Space

Production-ready React + Motion for React apartment rental website for Tolu's Space, Soluyi, Gbagada, Lagos.

## Run

```bash
npm install
npm run dev
```

Build for deployment:

```bash
npm run build
npm run preview
```

## Add the real images

Drop the 10 apartment photos plus `logo.jpg` into `public/images/` using the exact names listed in `public/images/README.txt`.

The master bedroom TV-wall image `bedroom-1-a.jpg` is already configured as the home hero.

## Single content source

All editable business copy, contact details, WhatsApp link, gallery metadata and nightly-rate value live in:

`src/data/content.js`

The nightly rate is intentionally unset because no actual rate was supplied. The booking UI therefore says “Rate available on request” rather than inventing a price.

## Design direction

The design uses a warm, restrained luxury palette, generous whitespace, editorial typography, asymmetric image composition and subtle Motion for React transitions. It is inspired by the rhythm and restraint of the supplied Marby reference without copying its layout or visual assets.

## Pages

- Home
- Gallery
- About
- Contact

## Deployment

The app is a standard Vite SPA. For static hosting, configure the host to serve `index.html` as the fallback for client-side routes.


## Apartment 2 update
This version supports two apartments through a shared apartment data model and selector. Existing responsive CSS breakpoints were preserved. Apartment 2 uses the same gallery filenames so its real photos can replace the placeholders without code changes.

## Important image note
The connected GitHub integration allowed the source code to be read but did not allow binary JPG downloads. Therefore this ZIP contains clearly marked image placeholders rather than pretending they are the original property photos. Before deploying this ZIP, copy the original Apartment 1 JPGs and logo from the current project into `public/images/apartment-1/` (and `public/images/logo.jpg`). Apartment 2 placeholders can later be replaced in `public/images/apartment-2/` using the exact same filenames.
