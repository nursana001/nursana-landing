# ✅ Checklist para Deploy Seguro en Nursana Landing (GitHub Pages)

## Antes del build
- [ ] Trabaja en una rama nueva creada desde main (ej: fixes/xxxx).
- [ ] Haz todos los cambios y commits en tu rama.
- [ ] Asegúrate de que las imágenes públicas (ej: logonursana-og.png) están en la carpeta `public/`.
- [ ] Edita los meta tags SOLO en el archivo raíz `index.html` (no en docs/index.html).
- [ ] Usa rutas absolutas para imágenes en los meta tags (ej: https://www.nursana.es/logonursana-og.png).
- [ ] Haz `git status` y confirma que no hay archivos pendientes de añadir/commitear en src/, public/ o la raíz.

## Build y commit en tu rama
- [ ] Ejecuta el build: `pnpm run build`
- [ ] Haz `git status` y revisa los cambios en docs/ (incluyendo docs/index.html y docs/logonursana-og.png).
- [ ] Añade y commitea TODOS los cambios generados por el build:
  - `git add .`
  - `git commit -m "build: actualiza build y meta tags para producción"`
- [ ] Haz push de tu rama:
  - `git push origin <tu-rama>`

## Merge y deploy
- [ ] Cambia a main: `git checkout main`
- [ ] Haz pull: `git pull`
- [ ] Haz merge de tu rama: `git merge <tu-rama>`
- [ ] NO vuelvas a hacer build en main.
- [ ] Haz commit y push final en main:
  - `git add .`
  - `git commit -m "deploy: actualiza producción con cambios de <tu-rama>"`
  - `git push origin main`

## Verificación final
- [ ] Verifica en GitHub Pages que la fuente es main/docs.
- [ ] Comprueba la web y los meta tags con [metatags.io](https://metatags.io/) o el debugger de Facebook/WhatsApp.
- [ ] Asegúrate de que la imagen og y el título aparecen correctamente al compartir.
