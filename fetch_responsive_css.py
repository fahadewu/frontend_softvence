#!/usr/bin/env python3
import requests
import re
import sys

# Force output to be unbuffered
sys.stdout = sys.stderr = open('/run/media/leopard/Programming/Projects/WEB_DEVELOPMENT/Client/Betopia/frontend_softvence/responsive_css_output.txt', 'w')

print("Fetching homepage...")
try:
    homepage = requests.get('https://softvence.agency/', 
                           headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
                           timeout=30)
    print(f"Homepage status: {homepage.status_code}")
    
    css_links = re.findall(r'href=["\']([^"\']*\.css[^"\']*)["\']', homepage.text)
    print(f"\nFound {len(css_links)} CSS links:")
    for link in css_links[:30]:
        print(f"  - {link}")
        
except Exception as e:
    print(f"Error fetching homepage: {e}")

print("\n" + "="*60)
print("Fetching responsive.css...")

urls_to_try = [
    'https://softvence.agency/wp-content/themes/developer/assets/css/responsive.css',
    'https://softvence.agency/wp-content/themes/developer/assets/css/style.css',
]

for url in urls_to_try:
    print(f"\nTrying: {url}")
    try:
        r = requests.get(url, 
                        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
                        timeout=30)
        print(f"Status: {r.status_code}")
        if r.status_code == 200 and len(r.text) > 100:
            print(f"Content length: {len(r.text)} bytes")
            print("\n--- FULL CSS CONTENT ---")
            print(r.text)
            break
    except Exception as e:
        print(f"Error: {e}")

sys.stdout.close()
