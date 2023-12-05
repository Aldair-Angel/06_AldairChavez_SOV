create database dbformulario;

use dbformulario;

create table Formulario (
	id_formulario int auto_increment primary key, 
	carrera varchar(60),
    nombres varchar(90),
    apellidos varchar(90),
    dni char(8),
    fehca_nacimiento varchar(120),
    correo_institucional varchar(150),
    clave varchar(90)
);

select * from Formulario