
import Link from 'next/link'
export default function Footer () {
  return (
    <div className='footer'>
        <p>Developed by JDStudios</p>
      <div className='contRedes'>
        <p>Nuestras Redes:</p>
      <div className="redes">
        <div className="redes__red">
          <Link href="https://www.facebook.com/boremobiliarios">
            <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#fdba02fd" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </Link>

        </div>
        <div className="redes__red">
          <Link href="https://www.instagram.com/boremobiliarios/" target="Instagram" >
            <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#fdba02fd" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </Link>


        </div>
        <div className="redes__red">
          <Link href="https://www.tiktok.com/@boremobiliarios" target="tiktok">
            <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width="50" height="50" viewBox="0 0 24 24" strokeWidth="3" stroke="#fdba02fd" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
            </svg>
          </Link>


        </div>
        <div className="redes__red">
          <Link href="https://wa.me/message/K7Z7XRTUQVSQF1" target="whatsapp">
            <svg loading="lazy" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="#fdba02fd" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
          </Link>


        </div>
      </div>
      </div>
    </div>
  )
}
