//controlador o los uses case, debes de tener de tener todos los casos de ususo que va a controlar tu aplicacion
//es el que tiene la comunicacion con el modelo.
// ORM Framework a base de datos ---> clases definidas a base de datos

const { response, request } = require("express"); // es el nucleo de nackend en js, framework ---> require es similar al import
// en algun momento hice install npm install express
// import voy a trarme una libreria y si no la encuentra no pasa nada, con el import si no la encuentra si se revienta.
//la unica carpeta que no subo es node_modules, git ignore en github, cuando le haga el pull para traermelo, debo ejecutar:
// npm i ---> instala las dependecias del proyecto que estan en package.json

const Orden = require("../models/ordenes.model"); // requiere el modelo de nuestra carpeta models
// todo lo que este en esa carpeta se los asigna a la constante empleado.

// objeto de respuesta
let responde = {
  msg: "",
  exito: false,
};

//Metodo Create
// LLena todos los campos que requiere nuestro schema
// en aps.js uso la carpeta de empleados controller, por eso el exports(para que lo exporte a donde lo vaya a necesitar)
exports.create = function (req, res) {
  // req indica entrada y res: salida
  // let empleado = new Empleado({
  //     nombre:      req.body.nombre,
  //     apellido_p:  req.body.apellido_p,
  //     apellido_m:  req.body.apellido_m,
  //     telefono:    req.body.telefono,
  //     email:       req.body.email,
  //     direccion:   req.body.direccion

  // })

  let orden = new Orden(req.body);

  orden.save(function (err, result) {
    // funcion de mongoose para guardar el dato --- guardar error, guarda sucess
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al guardar el orden");
      res.json(err); // response
      return;
    }

    (response.exito = true), (response.msg = "Orden registrada con exito.");
    res.json({ response, result }); // porque le dije que era un objeto que compone response, result
  });
}; // let de la linea 23 a 54 orden solo va a tener ese valor hasta donde cierra

// Metodo Find

exports.find = function (req, res) {
  console.log('Recibi una peticion en la ruta ordenes')
  Orden.find(function (err, ordenes) {
    // en caso que no de error, devuelve los orden.
    res.json(ordenes);
  });
};

// Metodo Find One

exports.findOne = function (req, res) {
  Orden.findOne({ nuemroOrden: req.params.id }, function (err, orden) {
    // en caso que no de error, devuelve el orden.
    res.json(orden);

    // al final de _id: request.params.id, viene un id, porque en el router, se le llamdo id
  });
};

// Metodo UPDATE

exports.update = function (req, res) {
  let orden = {
    largo: req.body.largo,
    ancho: req.body.ancho,
    alto: req.body.alto,
    peso: req.body.peso,
    direccionRecogida: req.body.direccionRecogida,
    ciudadRecogida: req.body.ciudadRecogida,
    destinatario: req.body.destinatario,
    cedulaDestinatario: req.body.cedulaDestinatario,
    direccionEntrega: req.body.direccionEntrega,
    ciudadEntrega: req.body.ciudadEntrega,
    estado: req.body.estado,
    usuario: req.body.usuario,
  };

  Orden.findByIdAndUpdate(req.params.id, { $set: orden }, function (err) {
    if (err) {
      console.error(err);
      (response.exito = false),
        (response.msg = "Error al actualizar el Orden");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = "Orden Actualizado con exito.");
    res.json(response);
  });
};

// Metodo DELETE

exports.remove = function (req, res) {
  Orden.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err);
      (response.exito = false),
        (response.msg = "Error al Eliminar el Orden");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = "Orden se Eliminó con exito.");
    res.json(response);
  });
};
