import React from 'react'




export default function validarFormularioContacto(valores) {

      
    let errores = {};


    //validar email
    if(!valores.email){
        errores.email = "El email es obligatorio";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)){
        errores.email = "Email no valido";
    }

    //vlidar páss

    if(!valores.nombre){
        errores.nombre = "El nombre es requerido";

    }
    if(valores.celular && !valores.horario){
        errores.horario ="Debe seleccionar una horario"
    }
    if(!valores.descripcion){
        errores.descripcion ="Debe incluir una descripcion"
    }
    if(!valores.categoria || valores.categoria === ''){
        errores.categoria ="Debe seleccionar una categoria"
    }

  return errores;
}