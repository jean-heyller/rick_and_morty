
const express = require("express");
const router = require("./index");
const morgan = require("morgan");
const cors = require("cors");
const { conn } = require('../DB_connection');

const PORT = process.env.PORT || 3001;

const server = express();
conn.authenticate()
  .then(() => console.log('Conexión exitosa con la base de datos'))
  .catch((error) => console.error('Error de conexión con la base de datos:', error));


conn.sync({force:true})
    .then(()=>{
        server.use(express.json());
        server.use(morgan("dev"));
        server.use(cors());
        server.use("/", router);
        server.listen(PORT,()=>{
            console.log("Listening on port",3001);
    })
    })
    .catch((err)=>console.log(err));


module.exports = server;