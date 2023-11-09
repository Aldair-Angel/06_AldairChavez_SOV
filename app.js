var mysql = require('mysql');

var conexion = mysql.createConnection({
   host:'localhost',
   database:'sakila',
   user:'aChavez',
   password:'12345678'
})

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('CONEXION EXITOSA');  
   }
});

conexion.query('SELECT * FROM actor',function(error,results,fields){
  if(error)
    throw error;

 results.forEach(result =>{
console.log(result);
});
})

//Insertar datos a mysql
/* conexion.query('INSERT INTO actor (first_name , last_name)VALUES("Juan","Apasa")',function (error,results){
  if(error) throw error;
      console.log("Registro Agregado",results)  
});*/

//actuaizar los datos
conexion.query('UPDATE usuarios SET first_name = "Steve", last_name="Rogers" WHERE actor_id=199' , function(error, result){
if(error) thron error;
console.log('!Registro actualisado¡, result);
});	
conexion.end();
