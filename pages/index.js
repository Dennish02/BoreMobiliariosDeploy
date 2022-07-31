

import Basestabajo from "../components/Basestabajo";
import Layout from "../components/layout/Layout";
import Nosotros from "../components/Nosotros.js";
import SeccionImagen from "../components/seccionImagen";
import Trabajos from "../components/Trabajos.js";


export default function Home() {

  return (
   
    <Layout inicio={true}>
      <Trabajos />
      <SeccionImagen/>
      <Basestabajo/>
      <Nosotros />
    
    </Layout>
     
     
  )
}
