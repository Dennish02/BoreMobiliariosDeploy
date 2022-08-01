/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Image from "next/image";
import { FirebaseContext } from "../firebase";
import { useRouter } from 'next/router';

const DetallesTrabajos = ({ trabajo, filtro }) => {
    const {usuario, firebase}= useContext(FirebaseContext)
    const { nombre, categoria, img, id } = trabajo;
    const router = useRouter();
    function handleView(e){
        const url = e.target.src;
        const imagen = document.createElement('div');
        imagen.innerHTML = `
             <img loading="lazy" width="200" height="300" src="${url}" alt="Imagen Galeria">
             `;
             imagen.classList.add('contImg')
        const overlay = document.createElement('div');
        overlay.appendChild(imagen);
        overlay.classList.toggle('overlay');
        overlay.onclick = function() {
                const body = document.querySelector('body');
                body.classList.remove('fijar-body');
                overlay.remove()
            }
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
    }

    const puedeBorrar = () => {
        if (!usuario) return false;
      
        if(usuario) {
          return true
        }
      }
      const eliminarTrabajo = async () => {
        if(usuario){
          router.push('/galeria')
        }
        if (!usuario) return router.push('/galeria');
        try {
          await firebase.db.collection('trabajos').doc(id).delete();
          router.push('/galeria')
      
        } catch (error) {
          console.log(error)
        }
      }
      
    return (
        categoria === filtro &&
        <div
        onClick={handleView} 
        className="cadaimagen">
            { puedeBorrar() &&
                <button className="botoneliminar boton-eliminar"
                  onClick={eliminarTrabajo}
                >ELIMINAR</button>
              }
            <Image
                
                src={img}
                alt={nombre}
                width="100%"
                height="100%"
                layout="responsive"
               // unoptimized={true}
            />
             
         </div>    
       
    )
}


export default DetallesTrabajos;
