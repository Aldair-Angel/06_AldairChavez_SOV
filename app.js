const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.get('/', (req, res) => {
    const conect = path.join(__dirname +'/public/index.html')
    res.sendFile(conect)
})

app.use("/css", express.static(__dirname + '/public/css'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
console.log('Server conectado en el puerto 3000')

//conexion mysql
let conexion = mysql.createConnection({
    host : 'localhost',
    database : 'dbformulario',
    user : 'root',
    password : '',
})

conexion.connect((err) => {
    if(!err) {
        console.log("conexion exitosa")
    } else {
        console.log("no hay conexion")
    }
})

app.post("/validar", (req, res) => {
    let data = req.body;
    const carrera = data.carrera;
    const nombre = data.nombre;
    const apellido = data.apellidos;
    const dni = data.dni;
    const email = data.email;
    const nacimiento = data.nacimiento;
    const contraseña = data.contraseña;

    const registrar = "INSERT INTO Formulario (carrera, nombres, apellidos, dni, fecha_nacimiento, correo_institucional, clave) VALUES ('" +carrera+ "', '"+nombre+"', '"+apellido+"', '"+dni+"', '"+email+"', '"+nacimiento+"', '"+contraseña+"' )"
    conexion.query(registrar,function(error) {
        if (error) {
            console.log("ocurrio un error")
        } else {
            console.log("datos guardados")
        }
    })
})