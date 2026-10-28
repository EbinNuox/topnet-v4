from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ConnectivitySubpageTests(unittest.TestCase):
    def test_colocation_service_pages_exist_with_wireframe_content(self):
        for service, filename in (
            ("Dedicated Rack", "dedicated-rack.html"),
            ("Shared Rack", "shared-rack.html"),
            ("Bare Metal Servers", "bare-metal-servers.html"),
        ):
            page = ROOT / filename
            self.assertTrue(page.is_file(), filename)
            html = page.read_text()
            self.assertIn(f"<title>{service} | TOPNET</title>", html)
            self.assertIn(f"<h1 id=\"{filename[:-5]}-title\">{service}</h1>", html)
            self.assertIn(f"A complete {service} service", html)
            self.assertIn(f"What to know before evaluating {service}", html)

    def test_colocation_links_use_real_service_pages(self):
        for filename in ("services.html", "co-location-services.html", "service-pages.js", "script.js"):
            html = (ROOT / filename).read_text()
            self.assertIn('dedicated-rack.html', html)
            self.assertIn('shared-rack.html', html)
            self.assertIn('bare-metal-servers.html', html)

    def test_new_pages_exist_with_required_service_content(self):
        for filename, service in (
            ("sd-wan-connectivity.html", "SD-WAN Connectivity"),
            ("vpn-connectivity.html", "VPN Connectivity"),
        ):
            page = ROOT / filename
            self.assertTrue(page.is_file(), filename)
            html = page.read_text()
            self.assertIn(f"<title>{service} | TOPNET</title>", html)
            self.assertIn(f"<h1 id=\"internet-connectivity-title\">{service}</h1>", html)
            self.assertIn(f"A complete {service} service", html)
            self.assertIn(f"What to know before evaluating {service}", html)

    def test_connectivity_submenu_uses_real_pages(self):
        pages = list(ROOT.glob("*.html"))
        self.assertGreater(len(pages), 0)
        for page in pages:
            html = page.read_text()
            if "SD-WAN Connectivity" in html:
                self.assertIn('href="sd-wan-connectivity.html"', html, page.name)
            if "VPN Connectivity" in html:
                self.assertIn('href="vpn-connectivity.html"', html, page.name)

    def test_every_page_has_shared_responsive_layer(self):
        pages = list(ROOT.glob("*.html"))
        self.assertGreater(len(pages), 0)
        for page in pages:
            html = page.read_text()
            self.assertIn('name="viewport"', html, page.name)
            self.assertIn("responsive.css", html, page.name)


if __name__ == "__main__":
    unittest.main()
