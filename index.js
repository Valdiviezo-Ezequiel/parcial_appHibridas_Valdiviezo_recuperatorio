import express from 'express'
import { routerIndex } from './routes/indexRoutes.js'

const app = express() // Crea el servidor

app.use(express.json()) // interpreta el body cuando viene un JSON

routerIndex(app)

/*
// RUTAS Y CONTROLADORES

// Crear una votación de un juez a un juego
app.post('/votes', (req, res) => {
  res.send('Hola!');
  // Implementar la lógica para registrar una votación
});

// Obtener el nombre de los juegos y los puntos de cada categoría de un juez
app.get('/judges/:judgeId/votes', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para obtener las votaciones de un juez
});

// Obtener los nombres de los jueces y los puntos de cada categoría de un juego
app.get('/games/:gameId/votes', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para obtener las votaciones de un juego
});

// Obtener la lista de juegos ordenados por puntaje en una edición específica
app.get('/games/sorted/:edition', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para obtener los juegos ordenados por puntaje en una edición
  // Puedes incluir un parámetro opcional para filtrar por género si es necesario
});

// Calcular el promedio de puntuaciones de un juego en cada categoría
app.get('/games/:gameId/average', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para calcular el promedio de puntuaciones de un juego
});



// CRUD DE JUEGOS (Crear, Leer, Actualizar y Borrar juegos)

app.get('/games/:gameId', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para obtener los detalles de un juego específico
});

app.put('/games/:gameId', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para actualizar un juego existente
});

app.delete('/games/:gameId', (req, res) => {
  res.send('Hola, mundo!');
  // Implementar la lógica para eliminar un juego
});
*/

app.listen(2023, function () {
    console.log("El servidor esta levantado! http://localhost:2023")
  })