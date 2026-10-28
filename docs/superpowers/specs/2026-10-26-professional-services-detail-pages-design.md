# Professional Services Detail Pages Design

## Intent

Add seven standalone Professional Services detail pages that use the existing Internet Connectivity visual system and the exact approved wireframe copy.

## Scope

- Create Collaboration, Low Current, IT Consulting, Infrastructure Projects, Cloud Projects, Business Continuity, and Datacenter Services pages.
- Reuse existing `styles.css`, `responsive.css`, `script.js`, local icons, header, navigation, footer, contact CTA, and responsive behavior.
- Connect every new page from the Professional Services category and shared Services dropdown.

## Non-goals

- No changes to the existing Internet Connectivity page or unrelated service-page content.
- No invented facts, statistics, certifications, locations, or service claims.
- No new visual language or dependency.

## Approved content

All seven pages share the wireframe hero, outcomes, delivery model, FAQ, and contact copy. Capability names are page-specific and sourced from the rendered wireframe. Related cards link to the other real local Professional Services pages.

## Implementation choice

Use compact standalone HTML pages that share the same classes and assets as `internet-connectivity.html`; keep the page-specific copy in each HTML file so the pages remain directly addressable and work without a build step.
