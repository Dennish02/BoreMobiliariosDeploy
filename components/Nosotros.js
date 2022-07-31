/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

export default function Nosotros() {
    return (
        <section className="contenedor sombra">
            <h2>Sobre Nosotros</h2>
            <div className="info">
                <div className="info-ema">
                    <p className="info-ema--texto"> <span>Boré Mobiliarios</span> nace en julio de 2021, a partir de la necesidad vista por el arquitecto <Link href="https://www.instagram.com/deibismezablanco/?utm_medium=copy_link">Deivis Meza Blanco</Link> y el ebanista-diseñador
                       <Link  href="https://www.instagram.com/emanuelhesler/"> Emanuel Guillermo Hesler</Link>. Ambos llegaron a la conclusión de que la ciudad de Valledupar necesitaba una empresa de mobiliarios diferente, con la capacidad
                        de resolver todas las necesidades de sus clientes.
                    </p>
                    <p className="info-ema--texto">En Boré Mobiliarios nos destacamos por la excelencia en nuestros trabajos, cuidando cada mínimo detalle a la hora de diseñar, construir y entregar nuestros muebles. Tenemos claro nuestro enfoque de suplir las necesidades de
                        nuestros clientes. </p>

                    <h3 className="info-ema--subtitulo">¿Qué significa Boré?</h3>
                    <p className="info-ema--texto">Boré es una palabra hebrea que significa "Creador" o BO: "Ven" - RE: "Ver" - Ven y ve por tus propios ojos. En Boré nos encargamos de crear diseños, crear muebles, crear estilos y tendencias; por eso los invitamos a que "vengan
                        y vean" con sus propios ojos la calidad y servicios que les ofrecemos. </p>

                    <h3 className="info-ema--subtitulo">¿Quiénes trabajan con nosotros? </h3>
                    <p className="info-ema--texto">
                        En Boré mobiliarios trabajamos siempre con los mejores de cada área:</p>
                        <ul>
                            <li>Construcción: <Link href='https://www.instagram.com/dmarquitectura2/?utm_medium=copy_link'> DM Arquitectura </Link></li>
                            <li>Electricidad: Eléctrico Nacho</li>
                            <li>Piedras y marmolería: Mármoles Anderson</li>
                            <li>Diseño y diseño 3D: <Link href="https://www.instagram.com/aliud_3d/?utm_medium=copy_link" >Aliud diseño y modelado 3D </Link> </li>

                        </ul>

                      <p>  En Boré mobiliarios somos profesionales.</p>
                </div>

            </div>
            <div className="contacto">
                <div className="contButton">
                    <Link href='/contacto'><a className="boton-principal">Ver Formas de Contacto</a></Link>
                </div>
               
            </div>
            
        </section>
    )
}
