import React, {useState, useEffect, useContext} from 'react'
import Layout from '../components/layout/Layout'
import {useRouter} from 'next/router'
//validaciones
import useValidacion from '../hooks/useValidacion'
import validarIniciarSesion from '../validacion/validarIniciarSesion'


//firebase
import firebase from '../firebase'
import {FirebaseContext} from '../firebase';

export default function Admin() {
  const router = useRouter();
  const {usuario} = useContext(FirebaseContext);

    const [error, guardarError ]= useState('')
    const STATE_INICIAL = {
      email: '',
      password: ''
    }
  
    const {
      valores,
      errores,
      handleChange,
      handleSubmit,
      handleBlur
    } = useValidacion( STATE_INICIAL, validarIniciarSesion, iniciarSesion);
  
  const {email, password} = valores;
  
  async function iniciarSesion (){
    try {
      await firebase.login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('hubo un error al iniciar sesion', error.message)
      guardarError(error.message)
    }
  }
useEffect(()=>{
  if(usuario){
    router.push('/dashboard')
  }
})

    return (
        <Layout inicio={false}>
            <section className='contenedor'>
                <h2>Admin</h2>
                <form
                    className='formulario-admin'
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <div className='campo'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            //className={`${errores.email && 'error'}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={email}
                            type='text'
                            id='email'
                            placeholder='Tu email'
                            name='email'
                        />

                    </div>
                    {errores.email && <p className='errores'>{errores.email}</p>}
                    <div className='campo'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            //className={`${errores.password && 'error'}`}
                            onChange={handleChange}
                            onKeyUp={handleBlur}
                            value={password}
                            type='text'
                            id='password'
                            placeholder='Tu password'
                            name='password'
                        />

                    </div>

                    {errores.password && <p className='errores'>{errores.password}</p>}
            <input
              className='boton-principal'
              type='submit'
              value='Iniciar Sesion'
            />
             {error && <p className='errores'>{error}</p>}
                </form>
            </section>
        </Layout>
    )
}
