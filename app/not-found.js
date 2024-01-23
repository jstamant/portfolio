import Header from '../components/header'
import Footer from '../components/footer'

import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const NotFound = () => {
  return (
    <>
      <Header />
      <section id="home" className="h-screen px-2 bg-pattern">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
          <h1 className="font-title uppercase text-6xl font-bold text-neutral-800">404</h1>
          <p className="mt-8 mb-10 text-2xl">Page not found - <a className="font-bold hover:text-theme-700" href="/">Return to home-page<FontAwesomeIcon icon={faHouse} className="ml-1 text-base" /></a></p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFound
