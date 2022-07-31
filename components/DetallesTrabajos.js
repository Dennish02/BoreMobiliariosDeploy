/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const DetallesTrabajos = ({ trabajo, filtro }) => {
    const { nombre, categoria, img } = trabajo;
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
    return (
        categoria === filtro &&
        <div
        onClick={handleView} className="cadaimagen">
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
