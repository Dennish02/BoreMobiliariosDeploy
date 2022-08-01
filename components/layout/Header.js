import { useContext } from 'react'
import { FirebaseContext } from '../../firebase'
import Link from 'next/link'
import Router from 'next/router';

export default function Header({inicio}) {
    const {usuario, firebase} = useContext(FirebaseContext);
function singOut(){
    firebase.cerrarSesion()
    Router.push('/')
}
  return (
    inicio ? 
      <header className="header">
          <div className="inicio">
            <div className='logo'>

            </div>
              <div className="ubicacion">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-map-pin" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffc107" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="11" r="3" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <p>Valledupar, Colombia</p>
              </div>
          </div>

      </header>
      : 
          <nav className='navbar'>
              <div className='cont-nav'>
                  <div className='logoNav'>

                  </div>

                  <ul className='enlacesNav'>
                      <Link href='/'><li>Inicio</li></Link>
                      <Link href='/galeria'><li>Galería</li></Link>
                      
                      <Link href='/contacto'><li>Contacto</li></Link>
                      {usuario && <Link href='/dashboard'><li className='LinkAdmin'></li></Link>}
                      {usuario &&

                          <li
                              onClick={() => singOut()}
                          >Cerrar Sesion</li>
                      }
                  </ul>
              </div>
          </nav>

  )
}
