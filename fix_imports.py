import os

spanish_root_files = [
    'contacto.astro', 'esnna.astro', 'galeria.astro', 'index.astro', 
    'libro-de-reclamaciones.astro', 'nosotros.astro', 'privacidad.astro', 
    'terminos.astro', 'transporte.astro'
]
spanish_subdirs = ['destinos', 'paquetes']
english_dir = 'en'

def replace_imports(filepath, level_change):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Original logic for level_change == 1 (adding a level):
    # If we have `../../layouts`, it should become `../../../layouts`
    # If we have `../layouts`, it should become `../../layouts`
    if level_change == 1:
        content = content.replace("'../../", "'#@@#").replace('"../../', '"#@@#')
        content = content.replace("'../", "'../../").replace('"../', '"../../')
        content = content.replace("'#@@#", "'../../../").replace('"#@@#', '"../../../')
    elif level_change == -1:
        # Removing a level:
        # `../../../` becomes `../../`
        # `../../` becomes `../`
        content = content.replace("'../../../", "'#@@#").replace('"../../../', '"#@@#')
        content = content.replace("'../../", "'../").replace('"../../', '"../')
        content = content.replace("'#@@#", "'../../").replace('"#@@#', '"../../')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

base = r'd:\Proyectos\tourperuvianservice\src\pages'

for file in spanish_root_files:
    path = os.path.join(base, file)
    if os.path.exists(path):
        replace_imports(path, -1)

for subdir in spanish_subdirs:
    for root, dirs, files in os.walk(os.path.join(base, subdir)):
        for f in files:
            if f.endswith('.astro'):
                replace_imports(os.path.join(root, f), -1)

for root, dirs, files in os.walk(os.path.join(base, english_dir)):
    for f in files:
        if f.endswith('.astro'):
            replace_imports(os.path.join(root, f), 1)

print("Imports updated")
