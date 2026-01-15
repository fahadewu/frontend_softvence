#!/usr/bin/env python3
import requests

output_file = '/run/media/leopard/Programming/Projects/WEB_DEVELOPMENT/Client/Betopia/frontend_softvence/fetched_responsive.css'

url = 'https://softvence.agency/wp-content/themes/developer/assets/css/responsive.css'
print(f"Fetching: {url}")

try:
    r = requests.get(url, 
                    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
                    timeout=30)
    print(f"Status: {r.status_code}")
    print(f"Content length: {len(r.text)} bytes")
    
    with open(output_file, 'w') as f:
        f.write(r.text)
    print(f"Saved to: {output_file}")
    
except Exception as e:
    print(f"Error: {e}")
    
    # Try style.css instead
    url2 = 'https://softvence.agency/wp-content/themes/developer/assets/css/style.css'
    print(f"\nTrying fallback: {url2}")
    try:
        r = requests.get(url2, 
                        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
                        timeout=30)
        print(f"Status: {r.status_code}")
        print(f"Content length: {len(r.text)} bytes")
        
        with open(output_file, 'w') as f:
            f.write(r.text)
        print(f"Saved to: {output_file}")
    except Exception as e2:
        print(f"Error: {e2}")
