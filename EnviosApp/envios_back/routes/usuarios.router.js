const express = require("express")
const router = express.Router()
const UsuariosController = require("../controllers/usuarios.controller")

router.post("/login", UsuariosController.login) // metodo creado en Controller/empleados.controller.js
router.post("/reg", UsuariosController.create) // metodo creado en Controller/empleados.controller.js
module.exports = router