from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ManagedServicesRouteTests(unittest.TestCase):
    def test_managed_services_dropdown_uses_real_detail_routes(self):
        script = (ROOT / "script.js").read_text()
        page = (ROOT / "managed-services.html").read_text()

        self.assertIn("'Infrastructure': 'Infrastructure.html'", script)
        self.assertIn("'Cybersecurity': 'Cybersecurity.html'", script)
        self.assertIn("'Service Desk': 'Service Desk.html'", script)
        self.assertIn('href="Cybersecurity.html">Explore Cybersecurity', page)

    def test_all_dropdown_capabilities_have_routes_and_files(self):
        script = (ROOT / "script.js").read_text()
        expected_routes = {
            "Internet Connectivity": "internet-connectivity.html",
            "Data Connectivity": "data-connectivity.html",
            "SD-WAN Connectivity": "sd-wan-connectivity.html",
            "VPN Connectivity": "vpn-connectivity.html",
            "Rayadah Cloud": "rayadah-cloud.html",
            "Public Clouds": "public-clouds.html",
            "Web Hosting": "web-hosting.html",
            "Saudi Domain Registration": "saudi-domain-registration.html",
            "Secured Cage": "secured-cage.html",
            "Dedicated Rack": "dedicated-rack.html",
            "Shared Rack": "shared-rack.html",
            "Bare Metal Servers": "bare-metal-servers.html",
            "Managed Security": "Managed Security.html",
            "Security Consulting": "Security Consulting.html",
            "Network Security": "Network Security.html",
            "Endpoint Security": "Endpoint Security.html",
            "Identity Security": "Identity Security.html",
            "Data Security": "Data Security.html",
            "Email Security": "Email Security.html",
            "Cloud Security": "Cloud Security.html",
            "Collaboration": "Collaboration.html",
            "Low Current": "Low Current.html",
            "IT Consulting": "IT Consulting.html",
            "Infrastructure Projects": "Infrastructure Projects.html",
            "Cloud Projects": "Cloud Projects.html",
            "Security Projects": "Security Projects.html",
            "Business Continuity": "Business Continuity.html",
            "Datacenter Services": "Datacenter Services.html",
            "Infrastructure": "Infrastructure.html",
            "Cybersecurity": "Cybersecurity.html",
            "Service Desk": "Service Desk.html",
        }
        for label, filename in expected_routes.items():
            self.assertIn(f"'{label}': '{filename}'", script)
            self.assertTrue((ROOT / filename).exists(), filename)


if __name__ == "__main__":
    unittest.main()
