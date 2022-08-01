import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';

const HeDynamic = dynamic (()=>import('./Header'))
const FooterDinamic = dynamic (()=> import('./Footer'))
export default function Layout(props) {
  
  const {inicio} = props;
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boré Mobiliarios</title>
        <meta name="description" content="Pagina principal de Bore mobiliarios muebles en MDF" />
      </Head>
      <HeDynamic inicio={inicio} />
      <main>
        {props.children}
      </main>
      <FooterDinamic/>
    </>
  )
}
