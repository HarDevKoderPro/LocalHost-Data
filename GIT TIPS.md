# Flujo de trabajo con Ramas
- `git checkout -b dev`  
  Crear la rama dev y cambiarse a ella.

- `git branch`  
  Listar ramas y confirmar la actual (*).

- `git add .`  
  Agregar cambios al área de staging.

- `git commit -m "mensaje"`  
  Crear commit en la rama dev.

- `git checkout main`  
  Cambiarse a la rama main.

- `git merge dev --no-ff -m "merge: integrar estilos (fondo azure y título centrado)"`  
  Integrar cambios de dev en main con commit de merge explícito.

- Verificar en el navegador la funcionalidad.

- `git branch -d dev`  
  Eliminar la rama dev (ya integrada).

- `git push`  
  Subir cambios al repositorio remoto.

# Renombrar Rama Master a Main
- `git branch -m master main`  
