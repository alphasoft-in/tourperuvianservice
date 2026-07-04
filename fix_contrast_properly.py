import os

def fix_contrast_properly(directory):
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.astro'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = content.replace("bg-orange-600 hover:bg-orange-700 text-white", "bg-orange-700 hover:bg-orange-800 text-white")
                new_content = new_content.replace("bg-orange-600 text-white", "bg-orange-700 text-white")
                
                # Update any shadow classes to match
                new_content = new_content.replace("shadow-orange-500/30", "shadow-orange-700/30")
                new_content = new_content.replace("shadow-orange-500/50", "shadow-orange-700/50")

                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Fixed {path}")

fix_contrast_properly(r'd:\Proyectos\tourperuvianservice\src')
