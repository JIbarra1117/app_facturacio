const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/facturas',(req,res)=>{
    mysqlConnection.query('SELECT * FROM `Facturacion`.`PRODUCTOS`;',(error,rows,fields)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log('Error de peticion: ', error);
        }
    });
});
/*
router.post('/singin',(req,res)=>{
    //console.log(req.body);
    const {Cedula,Contra} = req.body;
    console.log(Cedula+' '+'******');
    mysqlConnection.query('SELECT ID,Nombre,Apellido,Cedula,IDRol FROM Facturacion.USUARIOS where Cedula =? and Contra= SHA2(?,224) ',
    [Cedula,Contra],
    (err,rows,fields)=>{
        if(!err){
            if(rows.length>0){
                let datos = JSON.stringify(rows[0]);
                //console.log(rows[0]);
                const token = jwt.sign(datos,'stil');
                res.json({token});
            }else{
                res.json('Usuario incorrecto');
            }
        }else{
            console.log(err);
        }
    });
});
//Registrar Usuario
/*
router.post('/register',(req,res)=>{
    console.log(req.body);
    const {Nombre,Apellido,IDRol,Cedula,Contra} = req.body;
    console.log(Cedula+' '+'******');
    mysqlConnection.query('INSERT INTO `Facturacion`.`USUARIOS`    (`Nombre`,`Apellido`,`Cedula`,`IDRol`,`Contra`) VALUES(?,?,?,2,SHA(?));',
    [Nombre,Apellido,IDRol,Cedula,Contra],
    (err,rows,fields)=>{
        if(!err){
            console.log('El usuario');
        }else{
            console.log(err);
        }
    });
});*/
/*
router.post('/test',verificarToken,(req,res)=>{
    console.log(req.data);
    res.json('Informacion secreta');
});*/
/*
function verificarToken(req,res,next){
    //next Es la autorizacion para la siguiente funcion
    //se deve verificar si existe la cabecera que es Autorization
    if(!req.headers.authorization) return res.status(401).json('No autorizado');
    
    const token = req.headers.authorization.substr(7);
    //console.log(token);
    if(token!==''){
        const contenido = jwt.verify(token, 'stil');
        req.data = contenido;//Esto va a devolver
        next();//Al dar este next, ejecutara la correctamente la respuesta de la ruta /test
    }else{
        res.status(401).json('TOKEN vacío');
    }
}*/

module.exports = router;
