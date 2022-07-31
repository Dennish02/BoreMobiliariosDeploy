import React from "react";
import Link from "next/link";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

export default function DetalleMensaje({mensaje}) {
  return (
    <div className= {`${mensaje.visto  ? 'visto' : 'no-visto'} contenedorMensaje sombra`}>
          <Link
              href='/mensajes/[mensaje]'
              as={`/mensajes/${mensaje.id}`}
          >
              <p className="nombre">Cliente: {mensaje.nombre}</p>
          </Link>
          <p>Email: {mensaje.email}</p>
          <p>Enviado hace: {formatDistanceToNow(new Date(mensaje.creado), { locale: es })}</p>
   </div>    
  )
}
