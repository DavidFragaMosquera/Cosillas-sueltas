# Diario de viajes

## Funcionamiento backend

### Rutas

- /entries - GET - devolverá un JSON con la lista de últimos posts de la base de datos
- /entries - POST - creará un nuevo post y devolverá un JSON con los datos del post
- /entries/(ID) - DELETE - borrará el post con la (ID)

### Definición de post

- id (autonumerico)
- date (datetime)
- description (text)
- place (text)
  ...
- image (text)

## Funcionamiento frontend

http://localhost:3000

- Mostrará un formulario de creación de nuevo post
- Lista de posts
- Cada post con un botón de borrar
