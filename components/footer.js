import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 text-left text-base">
      <div className="flex flex-col md:flex-row-reverse justify-between w-11/12 mx-auto">
        <div className="my-8">
          <h1 className="uppercase font-bold mb-4 text-xl">Socials</h1>
          <nav className="text-2xl">
            <a className="px-1 duration-300 hover:text-neutral-400" href="https://github.com/jstamant"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="px-1 duration-300 hover:text-neutral-400" href="https://www.linkedin.com/in/justinstamant/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="px-1 duration-300 hover:text-neutral-400" href="https://www.instagram.com/jstamant_/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="px-1 duration-300 hover:text-neutral-400" href="mailto:jstamant24@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
          </nav>
        </div>
        <div className="my-8">
          <h1 className="uppercase font-bold mb-4 text-xl">Justin St-Amant</h1>
          <p>{process.env.site.subtitle}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
