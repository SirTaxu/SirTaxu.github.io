# SirTaxu.github.io

Portfolio bilingüe organizado en tres áreas principales: **Apps**, **Tools** y
**Games**. Incluye una colección de herramientas web estáticas para SirTaxu.

## Estructura

```text
.
├── index.html
├── styles.css
├── assets/
│   └── js/
│       └── site.js
└── tools/
    └── sprite-normalizer/
        └── index.html
```

El normalizador queda publicado en:

```text
https://sirtaxu.github.io/tools/sprite-normalizer/
```

Las secciones Apps y Games están preparadas para incorporar aplicaciones
públicas y prototipos jugables cuando sus builds estén listas. Hasta entonces
se muestran como próximos lanzamientos sin revelar proyectos privados.

Todas las rutas son relativas, por lo que la misma estructura también funciona en
un sitio de proyecto (`usuario.github.io/repositorio/`).

## Publicación con GitHub Pages

1. Copiá el contenido de esta carpeta a la raíz del repositorio de GitHub Pages.
2. Confirmá los cambios y subilos a GitHub.
3. En el repositorio, abrí **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama principal, la carpeta **/(root)** y guardá.

No requiere compilación, dependencias ni servidor. El selector ES/EN guarda la
preferencia en el navegador. El Sprite Sheet Normalizer procesa las imágenes de
forma local y no las envía a ningún servicio externo.

## Desarrollo local

Desde esta carpeta:

```bash
python3 -m http.server 8000
```

Luego abrí `http://localhost:8000/`.
