import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

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
      <Header inicio={inicio} />
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  )
}
