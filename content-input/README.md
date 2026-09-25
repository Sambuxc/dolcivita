# Client content intake

Upload approved Dolci Vita content and source assets in this folder. This is a staging area: implementation work will optimise and move public assets into their final locations.

## Important

- Do not upload passwords, API secret keys, private account exports, customer data, CVs or other personal data.
- Put required secrets directly into the deployment platform’s secret/environment-variable manager.
- Confirm that Dolci Vita has permission to publish every image, video, review excerpt and item of copy supplied.
- Prefer original, highest-resolution media. Do not enlarge compressed social-media downloads if originals are available.
- Keep filenames lowercase and descriptive; use hyphens instead of spaces.

## Requested structure

```text
content-input/
  business/business-details.md
  menu/menu.csv
  menu/images/<product-slug>.<jpg|png|webp>
  ordering/integration-notes.md  # Flipdish handover template already provided
  app/app-links.md
  app/android/<screenshots>
  app/ios/<screenshots>
  photos/team.<jpg|png|webp>
  photos/shop-front.<jpg|png|webp>
  photos/gallery/<images>
  photos/hero/<images-or-video>
  reviews/reviews.md
  legal/terms.md
  legal/privacy.md
  legal/cookies.md
  legal/accessibility.md
  pages/faqs.md
  pages/work-with-us.md
  pages/contact.md
```

Create only the folders for material currently available. The full required fields and implementation dependencies are documented in [`docs/project-completion-plan.md`](../docs/project-completion-plan.md#content-and-access-needed-from-the-client).

For ordering, complete the existing [`ordering/integration-notes.md`](ordering/integration-notes.md) template and paste the current Flipdish embed snippet there. The existing snippet is preferred over a newly guessed integration because it carries the correct public store/widget identifier and any account-specific configuration.

## Menu CSV header

Use this header so the catalogue can be imported consistently:

```csv
slug,name,category,short_description,long_description,price,currency,dietary_labels,allergen_statement,image_filename,image_alt,badge,featured,available,order_url_or_provider_id
```

Use `true` or `false` for `featured` and `available`. Separate multiple dietary labels with a pipe (`V|GF`), and leave a field blank rather than inventing unknown information.
