import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";

const TrabajosDynamic = dynamic(()=>import('../components/Trabajos'))
const SeccionImagenDynamic = dynamic(()=>import('../components/seccionImagen'))
const NosotrosDynamic = dynamic(()=>import('../components/Nosotros'))
const BaseTrabajosDynamic = dynamic(()=>import('../components/Basestabajo'))

export default function Home() {

  return (
   
    <Layout inicio={true}>
      <TrabajosDynamic />
      <SeccionImagenDynamic/>
      <BaseTrabajosDynamic/>
      <NosotrosDynamic /> 
    </Layout>
  )
}
