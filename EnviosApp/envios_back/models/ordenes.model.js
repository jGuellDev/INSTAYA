const mongoose = require("mongoose");
const Schema = mongoose.Schema; // mongoose trabaja con schemas = colecciones(tablas)

// preferiblemente empezar por los modelos, aca es donde voy a tipiar los datos
// EmpleadosSchema ---> es que  va ser  el tipado o la interfaces que va a obtener todos los documentos de esa coleccion
//next js -- le digo a mi controlador
// modelo de la base de datos.

const OrdenesSchema = new Schema({
    numeroOrden: {type: Number, required: true}, 
    largo: {type: String, required: true, maxLength: 60}, // campo y dentro, tipo de dato, si es requerido o no, y la cantidad de caracteres.
    ancho: {type: String, required: true, maxLength: 60},
    alto: {type: String, required: true, maxLength: 60},
    peso: {type: String, required: true, maxLength: 60},
    direccionRecogida: {type: String, required: false, maxLength: 100},
    ciudadRecogida: {type: String, required: false, maxLength: 100},
    destinatario: {type: String, required: true, maxLength: 100},
    cedulaDestinatario: {type: String, required: true, maxLength: 100},
    direccionEntrega: {type: String, required: true, maxLength: 100},
    ciudadEntrega: {type: String, required: true, maxLength: 100},
    estado: {type: String,
		enum: ['guardado', 'cancelado', 'cumplido'],
		default: 'guardado'},
    usuario: {type: String, required: true, maxLength: 100},
    fecha: {type: String}
    
}, { versionKey: '' });

module.exports = mongoose.model("ordenes", OrdenesSchema) // permite que se exporte en algun lado
//empleados = nombre de la coleccion(tabla)