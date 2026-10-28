#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
expected_connectivity_hash="52cf490b95298d06fffea20aeac39d1b25c09a1b7caf9d7d6822cb8d704b2be5"

pages=("Network Security.html" "Endpoint Security.html" "Identity Security.html" "Data Security.html" "Email Security.html" "Cloud Security.html")
capability_sets=(
  "Next Generation Firewall (NGFW)|Web Application Firewall (WAF)|Intrusion Detection System (IDS)|Intrusion Protection System (IPS)|DDoS Protection|Network Access Control (NAC)"
  "Antivirus|EDR|XDR|Disk Encryption|Device Control"
  "IAM|PAM|SSO|MFA|Password Vault"
  "DLP|Encryption (KMS & HSM)|Database Activity Monitoring|Data Classification"
  "Secure Email Gateway|Email Encryption|Anti-Spam|Anti-Phishing"
  "CSPM|CWPP|CIEM|CASB"
)

for index in "${!pages[@]}"; do
  page="${pages[$index]}"
  file="$root/$page"
  [[ -f "$file" ]] || { echo "missing page: $page" >&2; exit 1; }
  title="${page%.html}"
  grep -Fq "<title>$title | TOPNET</title>" "$file" || { echo "missing title: $page" >&2; exit 1; }
  IFS='|' read -r -a names <<< "${capability_sets[$index]}"
  for name in "${names[@]}"; do
    grep -Fq ">$name</h3>" "$file" || { echo "missing capability '$name' in $page" >&2; exit 1; }
  done
  ! grep -Fq '<h3></h3>' "$file" || { echo "empty capability card in $page" >&2; exit 1; }
  capability_icon_count="$(grep -o 'class="internet-capability-icon"' "$file" | wc -l | tr -d ' ')"
  [[ "$capability_icon_count" == "${#names[@]}" ]] || { echo "capability icon count mismatch in $page" >&2; exit 1; }
  related_count="$(grep -o 'class="internet-related-card"' "$file" | wc -l | tr -d ' ')"
  [[ "$related_count" == 4 ]] || { echo "expected 4 related cards in $page, found $related_count" >&2; exit 1; }
  media_count="$(grep -o 'class="internet-related-card-media"' "$file" | wc -l | tr -d ' ')"
  [[ "$media_count" == 4 ]] || { echo "related media count mismatch in $page" >&2; exit 1; }
  grep -Fq '<form class="contact-form">' "$file" || { echo "missing contact form in $page" >&2; exit 1; }
  grep -Fq 'name="email"' "$file" || { echo "missing email field in $page" >&2; exit 1; }
  grep -Fq 'name="requirement"' "$file" || { echo "missing requirement field in $page" >&2; exit 1; }
  grep -Fq 'Request consultation' "$file" || { echo "missing consultation CTA in $page" >&2; exit 1; }
  delivery_start="$(grep -n 'class="internet-delivery' "$file" | head -1 | cut -d: -f1)"
  delivery_block="$(sed -n "${delivery_start},/class=\"internet-faq/p" "$file")"
  grep -Fq 'internet-delivery-layout' <<< "$delivery_block" || { echo "missing delivery layout in $page" >&2; exit 1; }
  grep -Fq 'internet-delivery-visual' <<< "$delivery_block" || { echo "missing delivery visual in $page" >&2; exit 1; }
  grep -Fq 'cloud-network' <<< "$delivery_block" || { echo "missing delivery network in $page" >&2; exit 1; }
  outcomes_start="$(grep -n 'class="internet-outcomes' "$file" | head -1 | cut -d: -f1)"
  outcomes_block="$(sed -n "${outcomes_start},/class=\"internet-capabilities/p" "$file")"
  grep -Fq 'internet-outcomes-stage' <<< "$outcomes_block" || { echo "missing outcomes stage in $page" >&2; exit 1; }
  grep -Fq 'internet-outcomes-orbits' <<< "$outcomes_block" || { echo "missing outcomes orbits in $page" >&2; exit 1; }
  grep -Fq 'about-molecule-single' <<< "$outcomes_block" || { echo "missing outcomes molecule in $page" >&2; exit 1; }
  ! grep -Eq 'class="internet-related-card" href="[^"]+"><span class="internet-related-card-content">[^<]*</a>' "$file" || { echo "malformed related card in $page" >&2; exit 1; }
done

for page in "${pages[@]}"; do
  while IFS= read -r href; do
    case "$href" in
      ''|http:*|https:*|mailto:*|tel:*|\#*) continue ;;
    esac
    href="${href%%#*}"
    [[ -e "$root/$href" ]] || { echo "broken local link '$href' in $page" >&2; exit 1; }
  done < <(grep -o 'href="[^"]*"' "$root/$page" | sed 's/^href="//; s/"$//')
done

grep -Fq 'href="Network Security.html"' "$root/security-services.html" || exit 1
grep -Fq 'href="Endpoint Security.html"' "$root/security-services.html" || exit 1
grep -Fq 'href="Identity Security.html"' "$root/security-services.html" || exit 1
grep -Fq 'href="Data Security.html"' "$root/security-services.html" || exit 1
grep -Fq 'href="Email Security.html"' "$root/security-services.html" || exit 1
grep -Fq 'href="Cloud Security.html"' "$root/security-services.html" || exit 1
grep -Fq "'Network Security': 'Network Security.html'" "$root/script.js" || exit 1
grep -Fq "'Data Security': 'Data Security.html'" "$root/script.js" || exit 1
grep -Fq "'Email Security': 'Email Security.html'" "$root/script.js" || exit 1
grep -Fq "'Cloud Security': 'Cloud Security.html'" "$root/script.js" || exit 1

actual_hash="$(shasum -a 256 "$root/internet-connectivity.html" | awk '{print $1}')"
[[ "$actual_hash" == "$expected_connectivity_hash" ]] || { echo "internet-connectivity.html changed" >&2; exit 1; }

echo "security service pages validation passed"
