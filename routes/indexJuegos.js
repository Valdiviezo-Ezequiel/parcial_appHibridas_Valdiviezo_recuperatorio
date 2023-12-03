import express from 'express'
import juegosController from '../controllers/juegosController.js';
const routeJuegos = express()


routeJuegos.get('/:juego_id', juegosController.juegoInformacion)
routeJuegos.get('/edicion/:edicion', juegosController.juegosPorEdicion)
routeJuegos.get('/:juego_id/promedio', juegosController.promedio)

routeJuegos.post('/', juegosController.crearJuego)
routeJuegos.delete('/:juego_id', juegosController.borrarJuego)
routeJuegos.put('/:juego_id', juegosController.modificarJuego)

export default routeJuegos