import React, { useState } from 'react'
import DetallesTrabajos from '../components/DetallesTrabajos';
import Layout from '../components/layout/Layout'
import useTrabajos from '../hooks/useTrabajos';


export default function Galeria() {
  const [filtro, setFiltro] = useState('cocinas');
  const { trabajos } = useTrabajos('creado');
  function handleFilter(e){
    setFiltro(e.target.name)
  }
  return (
    <Layout inicio={false}>
        <div className='contenedor sombra'>
        <div className='filtros'>

          <input
          type='submit'
          value='Cocinas'
          name='cocinas'
          className={`${filtro === 'cocinas' ? 'selected-inputGaleria' : 'inputGaleria'}`}
            onClick={handleFilter}
          />
          <input 
          type='submit'
          name='closets'
          value='Clósets'
            className={`${filtro === 'closets' ? 'selected-inputGaleria' : 'inputGaleria'}`}
          onClick={handleFilter}
          />
          <input
           type='submit'
           value='Dormitorios'
          name='dormitorio'
           className={`${filtro === 'dormitorio' ? 'selected-inputGaleria' : 'inputGaleria'}`}
          onClick={handleFilter}
          />
          <input
          name='oficina'
          value='Muebles de Oficina'
          type='submit'
           className={`${filtro === 'oficina' ? 'selected-inputGaleria' : 'inputGaleria'}`}
          onClick={handleFilter}
          />
          <input
          name='ce'
          value='Centros de Entretenimiento'
          type='submit'
          className={`${filtro === 'ce' ? 'selected-inputGaleria' : 'inputGaleria'}`}
          onClick={handleFilter}
          />
        </div>
            <div className='galeria'>
             
                  {trabajos.map(trabajo => {
                    
                  return (
                    
                      <DetallesTrabajos
                          key={trabajo.id}
                          trabajo={trabajo}
                          filtro = {filtro}
                      />
                  )})}
              
            </div>
        </div>
    </Layout>

  )
}
