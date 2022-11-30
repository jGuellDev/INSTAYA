const mongoose = require("mongoose");
const Schema = mongoose.Schema; // mongoose trabaja con schemas = colecciones(tablas)

// preferiblemente empezar por los modelos, aca es donde voy a tipiar los datos
// UsuariosSchema ---> es que  va ser  el tipado o la interfaces que va a obtener todos los documentos de esa coleccion
//next js -- le digo a mi controlador
// modelo de la base de datos.

const UsuariosSchema = new Schema({
    usuario: {type: String, required: true, max: 100}, // campo y dentro, tipo de dato, si es requerido o no, y la cantidad de caracteres.
    pass: {type: String, required: true, max: 128},
    email: {type: String, required: true, max: 128},
    ciudad: {type: String, required: true, max: 128},
    direccion: {type: String, required: true, max: 128}
}, { versionKey: '' });

module.exports = mongoose.model("usuarios", UsuariosSchema) // permite que se exporte en algun lado
//usuarios = nombre de la coleccion(tabla)