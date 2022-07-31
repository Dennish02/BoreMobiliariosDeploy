import React, { useState, useContext } from 'react'
import Layout from '../components/layout/Layout'
import validarFormularioContacto from '../validacion/validarFormularioContacto';
import useValidacion from '../hooks/useValidacion';
import  { useRouter } from 'next/router';

//axios
import axios from 'axios';

//firebase
import {FirebaseContext } from '../firebase';
import { toast } from 'react-toastify';


export default function Contacto() {
    const {firebase}=useContext(FirebaseContext);
    const router = useRouter();

    const STATE_INICIAL = {
        nombre: '',
        email: '',
        celular: '',
        horario: '',
        descripcion:'',
        categoria:''
    }

    const {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur,
        handleSelected
    } = useValidacion(STATE_INICIAL, validarFormularioContacto, enviarForm);

    const { nombre, email,
    celular,
    horario,
    descripcion,
    categoria } = valores;

   async function enviarCorreoEma(email, nombre, descripcion, categoria){
        let config ={
            method:'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contacto`,
            headers:{
                'Content-Type': 'application/json',
            },
            data: {
                email,
                nombre, 
                descripcion,
                categoria}
        }
        try {
            const response = await axios(config);
            toast.success(response.data.response)
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }
    function enviarForm(){
          
        //crear el objeto de nebsaje
        const mensaje = {
            nombre,
            email,
            celular,
            horario,
            descripcion,
            categoria,
            creado: Date.now(),
            visto: false

        }
       try {
        firebase.db.collection('mensajes').add(mensaje)
        enviarCorreoEma(email, nombre, descripcion, categoria);
        
       } catch (error) {
        console.log({error: error.message});
       }
          
      
        // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
    }

  return (
      <Layout inicio={false}>
          <section>
              <h2>Contacto</h2>
              <form
                    className='formulario-admin'
                    onSubmit={handleSubmit}
                    noValidate
                   
                >
                    <fieldset className='margin-2rem'>
                        <legend>Datos Personales: </legend>

                        <div className='campo'>
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Nombre y Apellido"
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errores.nombre && <p className='errores'>{errores.nombre}</p>}

                        <div className='campo'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Tu email"
                                name="email"
                               value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errores.email && <p className='errores'>{errores.email}</p>}
                        <div className='campo'>
                            <label htmlFor="celular">Cel:</label>
                            <input
                                type="phone"
                                id="celular"
                                placeholder="Tu celular (Opcional)"
                                name="celular"
                                value={celular}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errores.celular && <p className='errores'>{errores.celular}</p>}
                        <div className='campo'>
                            <label htmlFor="horario">Horario:</label>
                            <input
                                type="time"
                                id="horario"
                                placeholder="Tu horario"
                                name="horario"
                               value={horario}
                                onChange={handleChange}
                                onKeyUp={handleBlur}
                            />
                        </div>
                        {errores.horario && <p className='errores'>{errores.horario}</p>}


                    </fieldset>
                    <fieldset className='margin-2rem'>
                        <legend>Descripción del Presupuesto:</legend>
                        <div className='campo'>
                            <label htmlFor="descripcion">Categoría:</label>
                           <select name='categoria' onBlur={handleBlur} onChange={handleSelected}>
                           <option value='' defaultValue >--Seleccione--</option>
                            <option value='cocinas'>Cocinas</option>
                            <option value='ce' >Centros de entretenimiento</option>
                            <option value='closets' >Clósets</option>
                            <option value='dormitorio'>Dormitorios</option>
                            <option value='oficina'>Muebles oficina</option>
                           </select>
                        </div>
                        {errores.categoria && <p className='errores'>{errores.categoria}</p>}
                        <div className='campo'>
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                placeholder="Descripcion de tu proyecto"
                                value={descripcion}
                                onChange={handleChange}
                                onKeyUp={handleBlur}
                            />
                        </div>
                        {errores.descripcion && <p className='errores'>{errores.descripcion}</p>}
                    
                        
                    </fieldset>
                    <input
                        className='boton-principal margin-2rem'
                        type='submit'
                        value='Enviar Formulario'
                    />
                </form>
          </section>
      </Layout>
   
  )
}
