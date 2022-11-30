// esto es lo que va a tomar de controller los metodos que cree en esa carpeta de controller.
// define las rutas que voy a tener para el metodo
const express = require("express") // para usar el frameworkd de express
const router = express.Router() // estoy definiendo router como la que va a darle manejo a las rutas de mi aplicacion
const ordenesController = require("../controllers/ordenes.controller") // el controlador de esta ruta va a ser va a ser el que yo tengo en esa carpeta

// cuando hagan un post a esta ruta, tu vas a correr el controlador create
router.post("/", ordenesController.create) // metodo creado en Controller/empleados.controller.js
router.get("/buscartodos", ordenesController.find)    // metodo creado en Controller/empleados.controller.js
router.get("/:id", ordenesController.findOne)    // metodo creado en Controller/empleados.controller.js
router.put("/:id", ordenesController.update)    // metodo creado en Controller/empleados.controller.js
router.delete("/:id", ordenesController.remove)    // metodo creado en Controller/empleados.controller.js


module.exports = router