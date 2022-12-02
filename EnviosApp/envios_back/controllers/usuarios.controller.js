// const { response, request } = require("express");
const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const { response } = require("express");
const jwt = require("jsonwebtoken")

exports.login = function(req, res, next){

  console.log('estoy recibiendo una peticion en la ruta login')

    let hasehdPass = crypto.createHash("sha512").update(req.body.pass).digest("hex") // retonar 128 caracteres y es el que pusimos como maximo en usuarios models
    
    Usuario.findOne( {email: req.body.email, pass: hasehdPass}, function(err, email){
        let response = {
            token: null
        }

        if( email !== null ){
            response.token = jwt.sign({
                id: email._id,
                email: email.email
            }, "__secret__")
        }

        res.json(response);

    } )
}


//Metodo Create
// LLena todos los campos que requiere nuestro schema
// en aps.js uso la carpeta de empleados controller, por eso el exports(para que lo exporte a donde lo vaya a necesitar)
exports.create = function (req, res) {
     
      let usuario = new Usuario({
      usuario:     req.body.usuario,
      pass:        crypto.createHash("sha512").update(req.body.pass).digest("hex"),
      email:       req.body.email,
      ciudad:      req.body.ciudad,
      direccion:   req.body.direccion
    })


    
  
    usuario.save(function (err, result) {
      // funcion de mongoose para guardar el dato --- guardar error, guarda sucess
      if (err) {
        console.error(err);
        (response.exito = false), (response.msg = "Error al guardar el Usuario");
        res.json(err); // response
        return;
      }
  
      (response.exito = true), (response.msg = "Usuario registrado con exito.");
      res.json({ response, result }); // porque le dije que era un objeto que compone response, result
    });
  }; // let de la linea 23 a 54 orden solo va a tener ese valor hasta donde cierra