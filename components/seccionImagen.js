import Link from 'next/link';
import React from 'react';

export default function SeccionImagen() {
  return (
    <section className='seccionImagen'>
        <h3 className='titulo-seccion'>Realizamos los amoblamientos que siempre soñaste</h3>
        <Link href='/galeria'><a className="boton-secundario">Ver Trabajos</a></Link>

    </section>
  )
}
