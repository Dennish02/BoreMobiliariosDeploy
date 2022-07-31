/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from "react";
import  {useRouter}  from 'next/router';
import { FirebaseContext } from "../firebase";
import DetalleMensaje from "../components/DetallesMensaje";
import Layout from '../components/layout/Layout'
import Subirimagen from "../components/Subirimagen";
import Loading from "../components/layout/Loading";


export default function Dashboard() {
  const router = useRouter();
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
      {!usuario ? <Loading/> :
           <section className="contenedor sombra">
           <div className="allmensajes">
             <h3 className="titulocargando">Mensajes</h3>
             {mensajes.map(mensaje=>{
             
              return(
               <DetalleMensaje
               key={mensaje.id}
               mensaje={mensaje}/>
             )})}
 
           </div>
           
             <h3>Agregar imágenes</h3>
             <Subirimagen/>
           
       </section>
      }
   

    </Layout>
  )
}
