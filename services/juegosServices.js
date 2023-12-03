import { MongoClient, ObjectId } from 'mongodb'
import votosServices from "./votesService.js"

const cliente = new MongoClient('mongodb://127.0.0.1:27017')
const db = cliente.db("AH_PARCIAL")
const juegosCollection = db.collection("games")

async function juegoInformacion(id){
  return votosServices.juegoInformacion(id)
}

async function juegosPorGeneroEdicion(edicion, filter = {}) {
  const filtro = {"edition": edicion} 
  filtro.edition = parseInt(edicion)

  if(filter?.genre) {
    filtro.genre = filter.genre
  }

  await cliente.connect()
  return juegosCollection.find(filtro).toArray()
}


async function crearJuego(data) {
    await cliente.connect()
    const juegoNuevo = {"_id": new ObjectId(), ...data}
    await juegosCollection.insertOne(juegoNuevo)
    return juegoNuevo
  }

  async function borrarJuego(id) {
    // console.log('Valor de id a eliminar:', id);
    await cliente.connect()
    return await juegosCollection.deleteOne({_id: new ObjectId(id)})
  }

  
  async function modificarJuego(data, id) {
    await cliente.connect()
    return await juegosCollection.updateOne({_id: new ObjectId(id)}, {$set: {...data}})
  }

  async function actualizarPuntosJuego(id, total_score) {
    await cliente.connect()
    return juegosCollection.updateOne({_id: new ObjectId(id)}, {$set: {...total_score}})
  }
  
 
  async function juegoExiste(id) {
    await cliente.connect()
    return  await juegosCollection.findOne({ _id: new ObjectId(id) })
  }

  async function juegoPorId(id) {
    await cliente.connect()
    return juegosCollection.findOne({_id: new ObjectId(id)})
  }

export {
    juegoInformacion,
    juegosPorGeneroEdicion,
    crearJuego,
    borrarJuego,
    modificarJuego,
    actualizarPuntosJuego,
    juegoExiste,
    juegoPorId,
}

export default {
    juegoInformacion,
    juegosPorGeneroEdicion,
    crearJuego,
    borrarJuego,
    modificarJuego,
    actualizarPuntosJuego,
    juegoExiste,
    juegoPorId,
}