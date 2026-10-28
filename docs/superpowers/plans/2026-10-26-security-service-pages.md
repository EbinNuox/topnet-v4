# Security Service Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four responsive Security Services detail pages and connect them to the existing local navigation without changing the existing Connectivity Services page.

**Architecture:** Create four standalone HTML files based on the existing Internet Connectivity page structure. Reuse current CSS/JS and local assets; update only navigation/category markup needed to expose the new pages.

**Tech Stack:** Static HTML, existing CSS, existing JavaScript, shell-based validation.

**Spec:** `docs/superpowers/specs/2026-10-26-security-service-pages-design.md`

## Global Constraints

- Use only approved wireframe copy and capability lists.
- Reuse existing CSS and JavaScript assets.
- Preserve `internet-connectivity.html` exactly.
- Do not add facts, statistics, certifications, locations, or service claims.
- Use local links to existing pages where available.

## Review Focus

- Missing page files or incorrect titles: static validation must assert all four filenames and titles.
- Capability drift: static validation must assert each approved capability and reject missing required headings.
- Broken local links: validation must resolve every relative `href` in the new pages.
- Connectivity regression: validation must compare its pre-change and post-change content hash.
- Responsive behavior: browser checks must cover desktop and narrow viewport layouts.

### Task 1: Add the failing static validation

**Files:**
- Create: `tests/validate-security-pages.sh`

**Interfaces:**
- Produces: executable validation command that exits nonzero until the four pages and navigation are present.

- [ ] **Step 1: Write the failing test**

Assert the four requested files exist, contain the expected title/heading and capability names, contain Security Services navigation links, and contain only resolvable local links.

- [ ] **Step 2: Run the test to verify it fails**

Run: `bash tests/validate-security-pages.sh`

Expected: FAIL because the four requested pages do not yet exist.

### Task 2: Create the four standalone service pages

**Files:**
- Create: `network-security.html`
- Create: `endpoint-security.html`
- Create: `identity-security.html`
- Create: `data-security.html`

**Interfaces:**
- Consumes: existing `internet-connectivity.html`, current shared CSS/JS, and the approved wireframe copy.
- Produces: four pages with the same header, service model, outcomes, delivery, FAQ, related services, contact CTA, footer, and responsive classes.

- [ ] **Step 1: Create Network Security page** with approved six capabilities: NGFW, WAF, IDS, IPS, DDoS Protection, NAC.
- [ ] **Step 2: Create Endpoint Security page** with approved five capabilities: Antivirus, EDR, XDR, Disk Encryption, Device Control.
- [ ] **Step 3: Create Identity Security page** with approved five capabilities: IAM, PAM, SSO, MFA, Password Vault.
- [ ] **Step 4: Create Data Security page** with approved four capabilities: DLP, Encryption (KMS & HSM), Database Activity Monitoring, Data Classification.
- [ ] **Step 5: Run the focused validation** and confirm it fails only for navigation until Task 3 is complete.

### Task 3: Connect the pages to Security Services navigation

**Files:**
- Modify: existing service-page headers/category navigation containing the Services dropdown.
- Modify: `security-services.html` category capability links.

**Interfaces:**
- Consumes: the four page filenames from Task 2.
- Produces: local links from Security Services category navigation and the new pages’ related-service cards.

- [ ] **Step 1: Add the four capability links under Security Services** in the relevant Services dropdown markup, preserving existing categories and links.
- [ ] **Step 2: Add the four detail links to `security-services.html`** with the approved labels and local filenames.
- [ ] **Step 3: Run `bash tests/validate-security-pages.sh`** and confirm PASS.

### Task 4: Verify visual behavior and regression safety

**Files:**
- Verify: all four new HTML files and `internet-connectivity.html`.

- [ ] **Step 1: Run the full static validation** and inspect exit code/output.
- [ ] **Step 2: Open each new page in a browser** and check desktop layout, dropdown navigation, buttons, cards, FAQ interaction, and footer.
- [ ] **Step 3: Check narrow viewport behavior** for each page and confirm no horizontal overflow or clipped content.
- [ ] **Step 4: Confirm `internet-connectivity.html` is unchanged** with `git diff -- internet-connectivity.html`.
- [ ] **Step 5: Run available HTML checks or repository tests** and record any unavailable checks explicitly.

