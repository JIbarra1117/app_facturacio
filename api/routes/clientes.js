const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');


router.get('/clientes',(req,res)=>{
    mysqlConnection.query('SELECT Cedula, Nombre, Apellido, Telefono, Domicilio from  Facturacion.CLIENTES;',
    (error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log('Error de peticion: ', error);
        }
    });
});

module.exports = router;
