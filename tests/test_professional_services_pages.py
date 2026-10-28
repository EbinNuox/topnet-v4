from pathlib import Path
import hashlib
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]


SERVICES = {
    "Collaboration": ["IP Telephony and VoIP Solutions", "Video Conferencing Systems", "Call Center Solutions"],
    "Low Current": ["Structured Cabling Systems", "Fiber-Optic Cabling and Termination", "Data Network Cabling", "CCTV, IPTV and Video Surveillance", "Access Control Systems", "Time Attendance Systems", "Intrusion Detection and Alarm Systems", "Fire Alarm and Life-Safety Systems", "Environmental and Water-Leak Detection"],
    "IT Consulting": ["Digital Transformation", "IT Strategy", "Enterprise Architecture", "Cloud Readiness"],
    "Infrastructure Projects": ["Datacenter Build", "Server Deployment", "Storage Deployment", "Network Deployment"],
    "Cloud Projects": ["Cloud Migration", "Kubernetes", "Containers", "Automation"],
    "Business Continuity": ["DR Design", "DR Testing", "BCP Development"],
    "Datacenter Services": ["Design", "Facility", "Infrastructure Operations", "Operations"],
}


class ProfessionalServicesDetailPageTests(unittest.TestCase):
    def test_pages_have_wireframe_content_and_shared_assets(self):
        for service, capabilities in SERVICES.items():
            filename = f"{service}.html"
            html = (ROOT / filename).read_text()
            self.assertIn(f"<title>{service} | TOPNET</title>", html)
            self.assertIn(f'<h1 id="professional-service-title">{service}</h1>', html)
            self.assertIn(f"What is included in {service}", html)
            self.assertIn(f"What to know before evaluating {service}", html)
            for capability in capabilities:
                self.assertIn(capability, html)
            self.assertIn('href="styles.css', html)
            self.assertIn('src="script.js', html)

    def test_category_and_menu_use_real_detail_routes(self):
        category = (ROOT / "professional-services.html").read_text()
        script = (ROOT / "script.js").read_text()
        service_script = (ROOT / "service-pages.js").read_text()
        for service in SERVICES:
            filename = f"{service}.html"
            self.assertIn(f'href="{filename}"', category)
            self.assertIn(f"'{service}': '{filename}'", script)
            self.assertIn(f"'{service}': '{filename}'", service_script)

    def test_existing_internet_connectivity_page_is_unchanged(self):
        page = ROOT / "internet-connectivity.html"
        self.assertEqual(hashlib.sha256(page.read_bytes()).hexdigest(), "52cf490b95298d06fffea20aeac39d1b25c09a1b7caf9d7d6822cb8d704b2be5")


if __name__ == "__main__":
    unittest.main()
