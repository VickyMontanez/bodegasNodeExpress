# Ejercicio en Node

Asegúrate de tener instalado lo siguiente antes de comenzar con el proyecto:

- Node.js ---> Se puede instalar desde [aquí](https://nodejs.org).
- NPM (Node Package Manage)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Navega hasta el directorio del proyecto:

   ```shell
   cd nombre-del-proyecto
   ```

3. Instala las dependencias del proyecto:

   ```shell
   npm install dotenv express mysql2 nodemon -E -D
   ```

4. Inicia el servidor ejecutando el comando `npm run dev`.

## Uso de Dependencias

El proyecto utiliza las siguientes dependencias:

- dotenv - 16.3.1
- express - 4.18.2
- mysql2 - 3.5.0
- nodemon - 2.0.22


## Configuración

El proyecto utiliza variables de entorno para la configuración de la conexión a la base de datos.

### MY_CONFIG

La variable de entorno `MY_CONFIG` define la configuración del servidor de la base de datos. Debes proporcionar el nombre de host y el puerto de conexión. 

```
MY_CONFIG={"hostname": "localhost", "port": 4002}
```

### MY_CONNECT

La variable de entorno `MY_CONNECT` define los parámetros de conexión a la base de datos, como el host, usuario, contraseña, base de datos y puerto.

```
MY_CONNECT={"host": "localhost", "user": "root", "database": "loquesea", "password": "123456", "port": 3306}
```

## Herramienta de testing 
Thunder Client es la herramienta generalmente utilizada para ejecutar testing de conexión:

1. Elije el método adecuado para la consulta (GET, POST, UPDATE, DELETE)

2. Agrega la URL correspondiente:
   ```
   http://{hostname}:{port}/nombre_ruta_correspondiente
   ```

3. Asegúrate de tener el encabezado `content-type: application/json`.

4. Si es un envío de datos (POST), agrega el cuerpo correspondiente a las columnas requeridas de la tabla.