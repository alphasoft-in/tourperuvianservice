import os

def revert_and_darken_orange(directory):
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.endswith('.tsx') or f.endswith('.astro'):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                # 1. Revert my previous change
                new_content = content.replace("bg-orange-500 hover:bg-orange-600 text-slate-900", "bg-orange-600 hover:bg-orange-700 text-white")
                new_content = new_content.replace("bg-orange-500 text-slate-900", "bg-orange-600 text-white")
                
                # 2. To ensure ALL buttons are consistent, also change any remaining white-text orange buttons to orange-600
                new_content = new_content.replace("bg-orange-500 hover:bg-orange-600 text-white", "bg-orange-600 hover:bg-orange-700 text-white")
                new_content = new_content.replace("bg-orange-500 text-white", "bg-orange-600 text-white")
                
                # Language Picker:
                new_content = new_content.replace("bg-orange-500 text-slate-900", "bg-orange-600 text-white")

                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    print(f"Fixed {path}")

revert_and_darken_orange(r'd:\Proyectos\tourperuvianservice\src')
