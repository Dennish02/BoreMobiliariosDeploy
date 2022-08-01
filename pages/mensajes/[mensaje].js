/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout/Layout";

import  {toast} from 'react-toastify';


const ErrorDynamic = dynamic (()=>import('../../components/layout/404'))
const LoadingDynamic = dynamic (()=>import('../../components/layout/Loading'))
export default function Mensaje() {
  //state del componente
  const [ detalleMensaje, setdetalleMensaje] = useState({})
  const [ error, setError] = useState(false)

  //routing para obtener el id actual
  const router = useRouter();
  
  const {query: {mensaje}} = router;
  const id = mensaje;
  //context firebase
  const {usuario, firebase}= useContext(FirebaseContext);

  useEffect(()=>{
    if(!usuario){
      router.push('/admin')
    }
      if(id){
        const obtenerMensaje = async ()=>{
          const mensajeQuery = await firebase.db.collection('mensajes').doc(id);
          const mensaje = await mensajeQuery.get();
          if(mensaje.exists){
            await mensajeQuery.update({visto : true})
            setError(false)
            setdetalleMensaje(mensaje.data());
          }else{
            setError(true);
          }
          
        }
        obtenerMensaje()
      }
  },[id])

 const handleDelete = async ()=>{
  if(!usuario){
    return router.push('/')
  }
  try {
   await firebase.db.collection('mensajes').doc(id).delete();
   toast.success('Mensaje Eliminado')
   router.push('/dashboard');
  } catch (error) {
    console.error('error borrar'+ error.message)
  }
 }
  //if( Object.keys(detalleMensaje).length === 0) return "Cargando"
  //if(!usuario) return router.push('/');

  return (

    <Layout inicio={false}>
    { error ? <ErrorDynamic/> : 
    Object.keys(detalleMensaje).length !== 0 ?
          <div className="contenedor sombra">
          
          <div className="contenedor-mensaje">
    
              <h3>Solicitud de Presupuesto de: {detalleMensaje.nombre}</h3>
              <div >
                <p>Descripción:</p><p className="detalle-mensjae"> {detalleMensaje.descripcion}</p>
              </div>
              <div>Categoria: {detalleMensaje.categoria}</div>
            <div className="contenedorIndoContacto">
                <p>Información para contactar al cliente:</p>
                <div className="infoContacto">
                    
                  <p><span>Email:</span> {detalleMensaje.email}</p>
                  <p><span>Celular:</span> {detalleMensaje.celular ? detalleMensaje.celular : "No especificado"}</p>
                  <p><span>Horario preferido para contactar:</span> {detalleMensaje.horario ? `${detalleMensaje.horario} hs` : "No especificado"}</p>
                </div>
    
            </div>
    
          </div>
              
            <button 
            onClick={handleDelete}
            className="boton-eliminar">Eliminar Mensaje</button>
        </div>
      : <LoadingDynamic/>
  }
    </Layout>
  )
}
