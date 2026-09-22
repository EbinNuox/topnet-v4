# TOPNET visual reference QA

homepage final result: blocked

## Scope

- Implementation: `index.html` and `styles.css` in this project.
- Reference source for this pass: the five client-supplied section screenshots in the latest request (Clients, Partners, Insights, Contact, and Footer).
- The screenshots are design references, not instructions embedded in documents.

## Review and changes

- Clients: the desktop logo tiles are set to 360 × 194 px, matching the landscape proportions in the supplied reference. No further size change was needed in this pass.
- Partners: the centered three-line message and surrounding orbit remain in place; this pass did not alter that composition.
- Insights: card gaps are 24 px; image insets are 12 px with a desktop height capped at 335 px; cards use a consistent 470–523 px minimum-height range on desktop. Reading time stays at the top, while category metadata aligns toward the bottom. The fixed minimum height is removed in the single-column tablet layout.
- Contact: the two-column headline/form composition was left unchanged because the earlier local preview appeared consistent with the supplied reference.
- Footer: the brand column is brought closer to the panel edge, and desktop grid tracks now scale between 1001–1800 px so the columns remain within the panel at common laptop widths. The wide desktop panel retains its 463 px base height.

## Verification status

- Static check: `styles.css` has balanced opening and closing braces (724 each).
- Visual check after the footer-specific CSS change: the local preview at `http://127.0.0.1:4173/index.html#contact` was reviewed at 1280 × 720 px. The blue-gray canvas band below the footer is gone, and the footer panel retains its 463 px base height and internal lighting.
- The user’s current screenshot and Figma reference use 1920 px width and different viewport heights (864 px and 943 px). At the bottom of the page, the preview footer leaves about 91 px below the panel, versus about 100–116 px in the reference, so the footer is close when aligned to the viewport bottom; an exact same-viewport comparison remains unavailable.
- Responsive screenshots and interaction checks remain unavailable.

## Blocker

The footer background correction is visually verified in the rendered preview. The broader homepage QA status remains blocked because a same-viewport 1920 px implementation/reference pair and responsive/interaction checks are still unavailable.

## Footer background and position follow-up

- Homepage contact/footer sections now share a dark plum-black canvas. The page-level `html` background is aligned to the final body gradient color so it no longer reveals the previous slate-blue band below the document content; this rule is scoped away from the About page.
- Desktop footer bottom spacing was tightened from 120 px to 100 px while preserving the 40 px top gap and existing card height. The rendered preview shows continuous dark background below the panel and a bottom-aligned position close to the supplied reference.
- Footer background: visually verified. Exact Figma position comparison: partial, due to viewport-size mismatch.

## Banner connector alignment follow-up

- The banner’s supplied `assets/Vector.svg` connector paths now use the reference’s orientation: upper paths are vertically mirrored, lower paths use the unflipped route, and left/right counterparts remain mirrored horizontally.
- Middle and lower connector rows were raised to line up with their service tiles in the supplied reference. The SVG reach now extends close to the central artwork, and the cloud/server artwork layers above the connector traces to keep both sides consistent.
- Rendered preview at 1280 × 720 px shows the animated traces following the full curves without the former low-row offset. Exact pixel comparison remains partial because the reference screenshot uses a different viewport/crop; overall homepage QA remains blocked pending a same-viewport comparison.

## About TopNet page review

final result: passed for desktop and mobile visual review

- Scope: `about.html` and About page rules in `styles.css`; `index.html` layout was left unchanged.
- Reference: user-supplied About wireframe at `https://deisgne8.github.io/topnet-wireframe/?page=about`.
- Local preview reviewed at `http://127.0.0.1:8000/about.html` at 1920 × 850 px and 390 × 844 px.
- About section order now follows the wireframe: hero, Who We Are, Our Team, Vision & Mission, Our Values, Company History, Clients & Partners, TopNet Certifications, contact, and footer. The standalone Saudi Presence and Key Strengths sections were removed because they do not appear in the wireframe.
- Visual review covered the hero, story, team cards, values, history, clients/partners, contact form, and footer. At the mobile viewport, section cards stack vertically and the footer fits the narrow screen.
- Follow-up: removed the individual section backdrops and kept one continuous navy gradient behind the About content; the hero now fades into that same base. Desktop and 390 × 844 px previews show no distinct section color bands.
- Values: reviewed the pinned, center-aligned statement and vertically stacked principles at desktop, including the active-value scroll treatment; at mobile, the content becomes a single column with no page-level horizontal overflow.
- Team: applied the supplied tall portrait-card layout with rounded corners and a bottom name/role strip. The heading and card row share responsive side gutters (96 px at 1920 px viewport width and 24 px on mobile) while cards remain horizontally scrollable; keyboard navigation advances the row. The track scrolls internally while the mobile page remains 390 px wide.
- Clients & Partners: the About page now reuses the homepage’s animated client marquee, partner orbit layout, labels, and project partner assets, within the single Clients & Partners section shown in the wireframe. At 390 px, both components stay inside the viewport without page-level horizontal overflow.
- Team content: populated the four names and roles shown in the supplied wireframe. Per user direction, no staff portraits are added; the portrait area uses the existing TopNet mark as a decorative placeholder without a visible pending label.
- Real in-project page and section destinations are used for navigation. Careers, social profiles, and legal pages are displayed as unavailable labels because the project contains no destination URLs.
- Missing approved content remains flagged in the page: team profiles, additional history milestones, and certification details.
- No automated tests were run; the About page was visually reviewed in the in-app browser, and its console had no runtime errors.

## Start a conversation background follow-up

- The Insights-to-Contact transition uses one shared slate canvas, with both sections transparent so there is no horizontal background seam.
- Added the supplied transparent TopNet mark as `assets/contact-logo-background.png` and softened it into a large screen-blended violet/lime light field behind the copy and form; the mark remains ambient rather than appearing as a separate card or foreground image.
- The local preview at 1280 × 720 px was visually checked after adjusting the logo layer’s placement, blur, and intensity. The supplied Figma screenshot is 1920 px wide, so exact same-viewport comparison remains partial; overall homepage QA remains blocked on that viewport mismatch and responsive/interaction checks.

## Rayadah Cloud lighting and connector follow-up

- Preserved the supplied `assets/Vector.svg` connector geometry and corrected the animation direction: curved routes now send their short light pulse from the outer edge toward the blue Saudi Cloud core, while straight middle routes keep the same inward travel.
- Matched the reference palette with muted green-gray base traces, a short cyan/lime animated highlight, lime service nodes, and a restrained blue atmospheric halo behind the core.
- The local preview at 1280 × 720 px was checked with the full Rayadah Cloud network visible. Node positions and line routing follow the supplied 1364/1920 px reference screenshots; exact same-viewport motion capture remains partial.

## Rayadah background light-marker alignment follow-up

- Repositioned the six desktop background light markers to the reference grid columns: 10.4%, 20.8% (top and lower pair), 83.2% (top and lower pair), and 93.7%.
- Changed the marker treatment from cyan drifting streaks to the reference’s pale green, 72 px vertical lights with a restrained breathing animation. Mobile positioning remains on the existing responsive fallback.

## Supplied Figma prototype cross-check

- Reference prototype: `https://www.figma.com/proto/FupwcfEMFy4RUzFqB7fz5z/TOPNET?page-id=0%3A1&node-id=456-2169`
- The Figma design/motion API could not inspect node `456:2169` because the file does not grant edit access. The public prototype was opened and visually checked section-by-section instead.
- Confirmed against the rendered prototype: one continuous slate canvas between sections, the About violet orbit lighting, the Why TopNet card mosaic, the Rayadah grid/core composition, partner orbit placement, insight card treatment, contact logo lighting, and the footer panel/ring background.
- Fixed the remaining shared-canvas seam by restoring the full-page navy/slate/green gradient instead of the flat `#192638` override.
- Fixed Rayadah pulse animation by restoring the SVG dash start offset (`1000 → 0`), keeping the complete base route visible while a thin cyan/lime dash travels along it. Service tiles remain lime; only the central Saudi Cloud visual stays blue.
- Static check after the final pass: `styles.css` has balanced opening and closing braces (1092 each). The local preview was reloaded at `http://127.0.0.1:4173/index.html#rayadah-cloud` and checked through the cloud, insights/contact, and footer areas.

## About visual top-gap follow-up

- Reduced the desktop About section minimum height from 960 px to 884 px so the orbit artwork is not pushed down by an artificial blank band.
- Raised the responsive molecule anchor slightly at desktop reference sizes while preserving the orbit scale, violet center lighting, and float animation.
- Reloaded the local preview and confirmed the About copy and molecule remain visible without clipping at the checked viewport.

## About-to-Why background continuity follow-up

- Removed the hard About section background edge and restored the shared page gradient behind the transition.
- Allowed the orbit artwork to extend beyond the About box so the lower circle can finish naturally instead of being cut at the section boundary.
- Extended the violet/green atmospheric glow through the transition while keeping the Why TopNet cards on the same blended canvas.

## Why TopNet card artwork blending follow-up

- Updated the Reliability card artwork from `lighten` to screen blending and softened its left mask edge so the source PNG's dark square background disappears into the card surface.
- Preserved the artwork brightness and its existing responsive card placement; the local Why TopNet preview was reloaded and checked after the change.

## Performance card stacking follow-up

- Added a dedicated stacking layer to the Performance section so the stat cards stay above the overflowing About orbit artwork.
- The orbit remains visible behind the cards while no longer crossing over their text or surfaces.

## Contact transition blending follow-up

- Extended the Contact ambient light layer above the section boundary and removed its hard local background edge.
- The Insights-to-Contact transition now fades continuously into the shared canvas; the local preview was checked at the Contact anchor after reload.

## Rayadah network coordinate alignment follow-up

- Repositioned the desktop Rayadah network as one coordinate system: the network sits lower and slightly left, while the blue core remains optically centered.
- Re-anchored the curved top and bottom SVG route groups to the supplied reference and kept the straight middle routes aligned with the node centers.
- Restored the mobile core to its centered position after the desktop adjustment; the local Rayadah preview was reloaded and checked.

## Partners center-gradient follow-up

- Increased the centered violet atmospheric glow to match the supplied Figma reference: broader vertical spread, brighter core, and a soft green/slate falloff into the shared canvas.
- Kept the orbit badges and their animation unchanged; this pass only corrects the section lighting and background blend.

## Performance card overlap follow-up

- Isolated the About orbit in a lower stacking context and raised the Performance section above it.
- Added blended opaque surfaces to the stat cards so the extended orbit cannot show through the card row; the arcs now begin below the cards as in the reference.
- Rechecked the local preview after reload at the Performance/About transition.

## Reliability card visual follow-up

- Reworked the wide Reliability tile to use one continuous navy/violet surface matching the supplied second reference.
- Moved the title to the reference top inset, kept the description anchored at the lower left, and softened the artwork mask so its raster background no longer creates a vertical panel.

## Rayadah Cloud proportion follow-up

- Reduced the desktop Saudi Cloud visual from 369 px to 350 px while preserving its optical center, bringing the blue core and outer rings back into the same proportion as the six Figma service cards and connector span.

## Partners-to-Insights background follow-up

- Removed the separate Partners background surface and restored the shared page canvas.
- Extended the violet atmospheric glow and orbit artwork into the Insights transition so the lower rings fade naturally instead of stopping at a horizontal section edge.

## Rayadah SVG route orientation follow-up

- Flipped the supplied Vector.svg geometry vertically for the desktop top and bottom route groups, including their animated paths, so the curves connect toward the service cards and Saudi Cloud core in the correct direction.
- Reversed only the lower-left and lower-right route groups within their existing 93 px bands so the two visible lower curves now face the cards without changing the network coordinates.

## Rayadah Cloud background follow-up

- Matched the supplied Figma background treatment with a continuous slate canvas, softer grid lines, and a wider blue atmospheric field behind and below the Saudi Cloud core.
- Kept the background layer behind the connector network and CTA so it reads as blended lighting rather than a separate section panel.

## Insights/news card follow-up

- Checked the supplied Figma card reference against the existing three-card grid.
- Kept the exact card geometry: equal-height slate panels, 24 px outer radius, 12 px inset media, 16 px image radius, and bottom-anchored category metadata.
- Added a soft violet-to-slate/green atmospheric layer behind the grid so the cards sit on the shared canvas without a separate section rectangle.

## Contact blurred-logo follow-up

- Restored the transparent TopNet logo asset as a visible blurred ambient layer behind the contact form.
- Increased its visibility and reduced the blur so the purple/green logo silhouette reads through the background while remaining blended behind the content.

## Reliability artwork blending follow-up

- Faded the square raster artwork's real left and right edges so its dark source background no longer reads as a separate rectangular panel inside the Reliability card.
- Preserved the wide-card placement, right alignment, and artwork brightness while keeping the image blended into the navy/violet surface.

## Rayadah lower-icon alignment follow-up

- Raised the lower-left and lower-right service icons by 18 px on desktop.
- Raised their matching SVG route bands by the same amount so the line-to-icon connection stays aligned.

## Insights metadata color follow-up

- Split each news-card metadata line into category, separator, and topic spans.
- Matched the reference hierarchy with lime category text and muted gray topic text at the bottom of each card.

## Rayadah upper-icon alignment follow-up

- Raised the upper-left and upper-right service icons by 16 px on desktop.
- Raised their matching SVG route bands by the same amount so the line-to-icon connection stays aligned.

## Rayadah recovery-icon alignment follow-up

- Matched the lower-left and lower-right service icons to the browser-marked reference points on desktop.
- Kept the SVG route geometry unchanged so the icons remain visually above their shared lower route.

## Footer background overlay follow-up

- Added a near-black violet gradient field behind the footer so the surrounding canvas no longer ends on slate.
- Shifted the outer field lower and moved the panel's subtle dark veil toward the lower half, while preserving the reference's violet and green right-side glow.
- Added a dedicated footer backplate below the panel using the same shared body gradient, so the lower transition continues with the exact canvas colors.
- Restored the dark transition and extended the upper canvas gradient through the footer end so the lower strip keeps the same dark color treatment.
- Removed the bright slate layer from the lower strip so it now stays on the same near-black tone as the upper footer canvas.

## Insights hover-state follow-up

- Matched the visible Figma interaction treatment with a restrained 4 px lift, a brighter slate edge, a soft green atmospheric glow, and a subtle image emphasis.
- Applied the same state to `:focus-visible` so keyboard users receive the same visual feedback without changing the card geometry.
- Replaced the hover surface's green slate brighten with the reference's dark navy-violet gradient while keeping the card edge neutral and subtle.

## Banner gradient continuity follow-up

- Extended the banner's violet/slate lighting into the lower portion with a full-height fade, so the image area continues into the same dark gradient instead of ending abruptly.
- Added the Figma-style broad muted green lighting behind the performance heading and banner transition without introducing a separate solid section panel.

## Footer background mark follow-up

- Restored the large translucent footer arcs inside the card surface; their decorative layers now sit above the panel background while footer content remains above them.

## Rayadah Cloud eyebrow follow-up

- Matched the Rayadah Cloud eyebrow pill to the muted slate reference style and removed the blue border, fill, and text treatment.

## Footer blurred-logo follow-up

- Removed the blurred TopNet logo layer from the footer card while preserving the existing dark violet and green background gradients.

## About molecule orbit follow-up

- Centered the molecule to the orbit system and restored the fourth, innermost orbit ring to match the reference composition.
- Corrected the later desktop artwork override so the active molecule position uses the same center axis as the orbit rings.
- Updated the narrow viewport rule to center the molecule from the viewport midpoint rather than anchoring it from the right edge.

## Section background blend follow-up

- Removed the opaque Why TopNet section fill and replaced it with a soft fading wash so the surrounding page gradient continues through the section without a hard horizontal seam.

## Footer logo visibility follow-up

- Raised the footer brand above the decorative background layers and applied the same cream logo treatment as the reference so the TopNet mark remains visible inside the card.
