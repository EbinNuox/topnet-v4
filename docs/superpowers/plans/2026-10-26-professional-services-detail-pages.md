# Professional Services Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (recommended) or superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Add seven wireframe-backed Professional Services detail pages and connect them through the existing TopNet navigation.

**Architecture:** Create standalone HTML pages using the Internet Connectivity page’s shared classes, assets, header, footer, form, and responsive hooks. Update the Professional Services category and both shared navigation data files with real local routes.

**Tech Stack:** Static HTML, existing CSS, existing JavaScript, Python unittest.

**Spec:** `docs/superpowers/specs/2026-10-26-professional-services-detail-pages-design.md`

## Global Constraints

- Reuse `styles.css` and `script.js`.
- Preserve the existing Internet Connectivity page exactly.
- Use only approved wireframe copy and local assets.
- Keep all new pages responsive and linked to real local pages.

## Review Focus

- Each page’s title, hero, capability list, FAQ, and related links match the wireframe.
- The Professional Services category and dropdown resolve every new service to a real page.
- Shared CSS/script/icon paths exist.
- Existing Internet Connectivity content is unchanged.

### Task 1: Add regression coverage

**Files:**
- Modify: `tests/test_professional_services_pages.py`

- [ ] Assert all seven pages exist and contain required title, hero, shared copy, capability names, and shared assets.
- [ ] Assert Professional Services links and route maps include every new page.
- [ ] Run the new test before implementation and observe the expected failures.

### Task 2: Add the seven standalone pages

**Files:**
- Create: `collaboration.html`
- Create: `low-current.html`
- Create: `it-consulting.html`
- Create: `infrastructure-projects.html`
- Create: `cloud-projects.html`
- Create: `business-continuity.html`
- Create: `datacenter-services.html`

- [ ] Use the existing detail-page class system and local assets.
- [ ] Apply only the wireframe-approved page-specific titles and capability names.
- [ ] Link related cards to the other real local Professional Services detail pages.

### Task 3: Connect navigation

**Files:**
- Modify: `professional-services.html`
- Modify: `script.js`
- Modify: `service-pages.js`

- [ ] Replace category card contact-only targets with real detail-page routes.
- [ ] Add all eight Professional Services labels/routes to both menu data maps.

### Task 4: Validate

- [ ] Run the full Python test suite.
- [ ] Parse every new page’s local `href` and `src` targets and confirm they exist.
- [ ] Confirm the existing `internet-connectivity.html` hash is unchanged.
