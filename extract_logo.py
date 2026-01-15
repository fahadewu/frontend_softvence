
import re
import base64
import os

header_path = '/home/fahad/Downloads/softvence_conversion/softvence-next/components/Header.tsx'
output_path = '/home/fahad/Downloads/softvence_conversion/softvence-next/public/assets/images/logo.jpg'

with open(header_path, 'r') as f:
    content = f.read()

# Find the base64 string
# Look for src="data:image/jpg+xml;base64,..."
match = re.search(r'src="data:image/jpg\+xml;base64,([^"]+)"', content)

if match:
    base64_str = match.group(1)
    try:
        img_data = base64.b64decode(base64_str)
        with open(output_path, 'wb') as f:
            f.write(img_data)
        print(f"Successfully saved logo to {output_path}")
    except Exception as e:
        print(f"Error decoding/saving: {e}")
else:
    print("Could not find base64 logo string")
