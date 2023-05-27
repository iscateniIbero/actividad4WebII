/*  Asegurese de tener Node.js instalado en tu sistema. Luego, crea un nuevo directorio para tu proyecto y abre una terminal en ese directorio.
    A continuación, inicializa un proyecto Node.js ejecutando el siguiente comando en la terminal: npm init -y
    Instala las dependencias necesarias ejecutando los siguientes comandos: 
    npm install express swagger-jsdoc swagger-ui-express

    Ahora, ejecute el siguiente comando en la terminal para iniciar el servidor: node RESTSwagger.js
    
*/

const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Una API para gestionar usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['app.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Definición de rutas
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     responses:
 *       '200':
 *         description: OK
 */
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]);
});

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Usuario no encontrado
 */
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 1) {
    res.json({ id: 1, name: 'John' });
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
})
.then(() => {
  console.log(`Servidor iniciado correctamente.`);
})
.catch((error) => {
  console.error('Error al iniciar el servidor:', error);
});