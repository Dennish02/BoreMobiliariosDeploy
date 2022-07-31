
import Image from 'next/image'


export default function Trabajos() {
    return (
        <section className='contenedor sombra'>

            <h2>Nuestros Trabajos</h2>

            <div className="contenedor-trabajos">

                <div className="trabajos">
                    <h3 className="trabajos-titulo">Cocinas</h3>
                    <Image
                        width="100%"
                        height="100%"
                        src={`/static/img/iconCocina.png`}
                        alt='Imagen Categoria'
                        layout="fixed"
                        unoptimized={true}
                        
                    />
                    <div className="trabajos-contenedorTexto">
                        <p className="trabajos-contenedorTexto--texto">Creamos cocinas ideales para tus espacios con el objetivo de cumplir tus expectativas de diseño, comodidad y  de almacenamiento. 
                        Inspítare en nuestros trabajos
                           
                        </p>
                    </div>
                </div>
                <div className="trabajos">
                    <h3 className="trabajos-titulo">Clósets</h3>
                    <Image
                        width="100%"
                        height="100%"
                        src={`/static/img/iconClosets.png`}
                        alt='Imagen Categoria'
                        layout="fixed"
                        unoptimized={true}
                        
                    />
                    <div className="trabajos-contenedorTexto">
                        <p className="trabajos-contenedorTexto--texto">Clósets hechos a medida para todo tipos de espacios, con modelos únicos segun tus necesidades. Podes acceder a ver algunos de nuestros trabajos.
                        </p>
                    </div>
                </div>
                <div className="trabajos">
                    <h3 className="trabajos-titulo">Centros de entretenimiento</h3>
                    <Image
                        width="100%"
                        height="100%"
                        src={`/static/img/iconCE.png`}
                        alt='Imagen Categoria'
                        layout="fixed"
                        unoptimized={true}
                       
                    />
                    <div className="trabajos-contenedorTexto">
                        <p className="trabajos-contenedorTexto--texto">Centros de entretenimiento pensados para cumplir tus espectativas en diseño y comodidad para tu centro de recración. Podes acceder a ver algunos de nuetros modelos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
