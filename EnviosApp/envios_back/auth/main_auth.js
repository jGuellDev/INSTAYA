const { request } = require("express");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => { 

    console.log(req.headers)

    try {
            const token = req.headers.authorization.split(" ")[1] // split para encontrar algo en especifico ---
            const decoded = jwt.verify(token, "__secret__")
            request.usuario = decoded
            next()
        } catch(error){
            res.status(401)
            res.json({code: 4, msg:"No tienes permiso para acceder", error: error}) // buscar liberia para manejador de errores, debes ubicarlo en error:error.
    }
}

module.exports = auth