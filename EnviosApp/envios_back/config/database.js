const mongoose = require("mongoose");
const host = "0.0.0.0"; // aqui decía localhost ---> lo reemplace por 0.0.0.0 para que funcionará
const port = "27017";
const db = "envio";  // hice la prueba con una db ya creada en este caso dbcursotest

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;  // Acentro grave = alt + 96 ``
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection
    dbConnection.on("error", console.error.bind(console, "mongodb connection error."))
}