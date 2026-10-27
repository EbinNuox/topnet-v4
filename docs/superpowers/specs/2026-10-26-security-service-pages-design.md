# Security service pages design

## Intent

Add four standalone TopNet service pages for Network Security, Endpoint Security, Identity Security, and Data Security. The pages must match the existing Internet Connectivity visual system while using only the approved wireframe copy and capability lists.

## Goals

- Add four standalone HTML pages with shared header, footer, responsive styling, service model, outcomes, capabilities, delivery model, FAQs, related links, and contact CTA.
- Reuse the existing CSS and JavaScript assets.
- Add the four pages to the Security Services category links and Services dropdown.
- Preserve `internet-connectivity.html` and all existing pages unless a navigation link must be updated.
- Keep links local and real wherever an existing page is available.

## Non-goals and constraints

- No new company facts, statistics, certifications, locations, or service claims.
- No new dependencies or framework changes.
- No changes to the existing Connectivity Services page content or layout.
- Wireframe-only copy is authoritative; Email Security is not added because the request names four pages and no approved local page exists for it.

## Approaches

1. Standalone pages adapted from `internet-connectivity.html` (chosen): safest for this static site and preserves existing page behavior.
2. A data-driven shared template: less duplication, but requires broader runtime and markup changes with more regression risk.

## Implementation calls

- Use the existing service-page classes and `service-pages.js` behavior.
- Use the security wireframe’s shared text for hero/outcomes/delivery/FAQ/CTA sections and vary only title, capability cards, and related-service order.
- Add Security Services dropdown capabilities to the existing page headers where the category navigation is present, without changing the Connectivity Services page itself.
- Add a focused static validation script/test to check the four files, required headings, local links, and the unchanged Connectivity Services page.

## Verification

- Run the focused static test and the repository’s available validation commands.
- Check each new page in a browser at desktop and narrow viewport sizes.
- Confirm `internet-connectivity.html` has no diff.
