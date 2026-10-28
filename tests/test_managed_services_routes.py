from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class ManagedServicesRouteTests(unittest.TestCase):
    def test_managed_services_dropdown_uses_real_detail_routes(self):
        script = (ROOT / "script.js").read_text()
        page = (ROOT / "managed-services.html").read_text()

        self.assertIn("'Infrastructure': 'infrastructure.html'", script)
        self.assertIn("'Cybersecurity': 'cybersecurity.html'", script)
        self.assertIn("'Service Desk': 'service-desk.html'", script)
        self.assertIn('href="cybersecurity.html">Explore Cybersecurity', page)

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
            "Managed Security": "managed-security.html",
            "Security Consulting": "security-consulting.html",
            "Network Security": "network-security.html",
            "Endpoint Security": "endpoint-security.html",
            "Identity Security": "identity-security.html",
            "Data Security": "data-security.html",
            "Email Security": "email-security.html",
            "Cloud Security": "cloud-security.html",
            "Collaboration": "collaboration.html",
            "Low Current": "low-current.html",
            "IT Consulting": "it-consulting.html",
            "Infrastructure Projects": "infrastructure-projects.html",
            "Cloud Projects": "cloud-projects.html",
            "Security Projects": "security-projects.html",
            "Business Continuity": "business-continuity.html",
            "Datacenter Services": "datacenter-services.html",
            "Infrastructure": "infrastructure.html",
            "Cybersecurity": "cybersecurity.html",
            "Service Desk": "service-desk.html",
        }
        for label, filename in expected_routes.items():
            self.assertIn(f"'{label}': '{filename}'", script)
            self.assertTrue((ROOT / filename).exists(), filename)


if __name__ == "__main__":
    unittest.main()
