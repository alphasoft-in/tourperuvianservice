import os
import glob

def fix_contrast(directory):
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.astro'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                # Replace specific patterns known to have contrast issues
                new_content = content.replace("bg-orange-500 text-white", "bg-orange-500 text-slate-900")
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Fixed contrast in {path}")

fix_contrast(r'd:\Proyectos\tourperuvianservice\src')
