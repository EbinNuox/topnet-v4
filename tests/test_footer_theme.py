from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
FOOTER_THEME = "footer-theme.css"


class FooterThemeTests(unittest.TestCase):
    def test_every_page_with_a_footer_loads_the_shared_theme_last(self):
        pages_with_footers = []

        for page in ROOT.glob("*.html"):
            html = page.read_text(encoding="utf-8")
            if not re.search(r"<footer\b", html, re.IGNORECASE):
                continue

            pages_with_footers.append(page.name)
            stylesheets = re.findall(
                r"<link\b[^>]*href=[\"']([^\"']+\.css(?:\?[^\"']*)?)[\"']",
                html,
                re.IGNORECASE,
            )
            self.assertTrue(stylesheets, f"{page.name} has no stylesheet links")
            last_stylesheet = stylesheets[-1].split("?", 1)[0].rsplit("/", 1)[-1]
            self.assertEqual(
                last_stylesheet,
                FOOTER_THEME,
                f"{page.name} must load {FOOTER_THEME} after page-specific CSS",
            )

        self.assertGreater(len(pages_with_footers), 0, "No footer pages were found")

    def test_shared_theme_keeps_rayadah_cloud_on_its_own_brand_palette(self):
        theme = (ROOT / FOOTER_THEME).read_text(encoding="utf-8")
        self.assertIn("body:not(.rayadah-page-body) .site-footer", theme)
        self.assertIn("body:not(.rayadah-page-body) .footer-brand .footer-logo", theme)


if __name__ == "__main__":
    unittest.main()
