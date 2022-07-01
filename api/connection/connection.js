const mysql = require('mysql');

/*const mysqlConnection = mysql.createConnection({
    host:'mysql-80963-0.cloudclusters.net',
    user:'admin',
    password:'22BesVBX',
    database:'Facturacion',
    port:'19988',
    ssl:{
        rejectUnauthorized:false
    }
});*/

const mysqlConnection = mysql.createConnection({
    host:'35.194.4.175',
    user:'root',
    password:'B1<OKrM[v3}P(,vkñ',
    database:'Facturacion',
    port:'3306',
    ssl:{
        rejectUnauthorized:false
    }
});

mysqlConnection.connect(error =>{
    if(error){
        console.log('Error en db: ',error);
        return;
    }else{
        console.log('Todo ok con la DB!');
    }
});
module.exports = mysqlConnection;
 