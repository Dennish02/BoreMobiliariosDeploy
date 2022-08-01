/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from "react";
import dynamic from "next/dynamic";
import { FirebaseContext } from "../firebase";
import Layout from '../components/layout/Layout'

const LoadingDynamic = dynamic(()=>import('../components/layout/Loading'))
const SubirDynamic = dynamic(()=>import('../components/Subirimagen'))
const DetalleDynamic = dynamic(()=>import('../components/DetallesMensaje'))

export default function Dashboard() {
  const [mensajes, guardarMensajes]= useState([])
  const {usuario, firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    const obtenerMensajes = () =>{
      firebase.db.collection('mensajes').orderBy('creado', 'desc').onSnapshot(manejarSnapshot)
    }
    obtenerMensajes()
  },[])
  
  function manejarSnapshot(snapshot){
    const mensajes = snapshot.docs.map(doc => {
      return{
        id: doc.id,
        ...doc.data()
      }
    })
   guardarMensajes(mensajes); 
  }
 
  return (  
    <Layout inicio={false}>
      {!usuario ? <LoadingDynamic/> :
           <section className="contenedor sombra">
           <div className="allmensajes">
             <h3 className="titulocargando">Mensajes</h3>
             {mensajes.map(mensaje=>{       
              return(
               <DetalleDynamic
               key={mensaje.id}
               mensaje={mensaje}/>
             )})}
           </div>        
            <h3>Agregar imágenes</h3>
             <SubirDynamic/>         
       </section>
      }
    </Layout>
  )
}
