# Connectivity Subpages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add matching SD-WAN Connectivity and VPN Connectivity service pages and connect them from the existing Connectivity Services navigation.

**Architecture:** Duplicate the existing `internet-connectivity.html` page structure so its visual system, responsive behavior, forms, footer, and interactions remain consistent. Change only service-specific copy and related links; update the shared service-menu placeholders in existing HTML files.

**Tech Stack:** Static HTML, existing CSS, existing JavaScript, local assets.

**Spec:** User request and supplied SD-WAN/VPN wireframe.

## Global Constraints

- Reuse `styles.css` and `script.js`.
- Preserve the existing Connectivity Services page exactly except for replacing its two `#` submenu links with real page links.
- Use only approved wireframe copy; do not invent company claims or statistics.
- Keep links pointed at real existing pages where available.
- Validate local page and asset references.

## Review Focus

- New pages must contain the same header/dropdown/footer structure as Internet Connectivity.
- SD-WAN and VPN labels must be consistent in title, hero, model, capability heading, FAQ heading, and contact area.
- Connectivity submenu links must resolve to both new pages everywhere they are duplicated.
- Existing pages must not acquire unrelated content or layout changes.
- All referenced local assets and scripts must exist.

### Task 1: Add the two service pages

**Files:**
- Create: `sd-wan-connectivity.html`
- Create: `vpn-connectivity.html`
- Reference: `internet-connectivity.html`

- [ ] Copy the approved Internet Connectivity page structure and replace only the service-specific labels and related-service links.
- [ ] Keep shared styles/scripts/assets unchanged.

### Task 2: Connect navigation

**Files:**
- Modify: all existing `*.html` files containing the Connectivity Services submenu placeholders.

- [ ] Replace `href="#"` for SD-WAN Connectivity with `sd-wan-connectivity.html`.
- [ ] Replace `href="#"` for VPN Connectivity with `vpn-connectivity.html`.

### Task 3: Validate

- [ ] Check both new pages for required scripts, styles, assets, headings, and links.
- [ ] Check no local `href`/`src` targets are missing.
- [ ] Confirm the existing Internet Connectivity page remains unchanged apart from the two navigation link targets.
