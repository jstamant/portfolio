import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const link = {
    home: "/#",
    about: "/#about",
    projects: "/#projects",
    contact: "/#contact",
  }
  return (
    <header className="fixed w-full z-50 text-neutral-800 bg-white h-16 pl-4 md:pl-12 text-lg uppercase font-bold shadow-xl">
      <div className="h-full flex justify-between">
        <a className="flex items-center transition-colors duration-300 hover:text-theme-500" href="/">
          <img className="h-12 mr-4 rounded-full" src="/profile.png" />
          <p>Justin St-Amant</p>
        </a>
        <nav className="text-base">
          <ul className="h-full flex items-center">
            <li className="hidden md:flex">
              <a className="px-8 py-4 transition-colors duation-300 hover:text-theme-500" href={link.home}>Home</a>
            </li>
            <li className="hidden md:flex">
              <a className="px-8 py-4 transition-colors duation-300 hover:text-theme-500" href={link.about}>About</a>
            </li>
            <li className="hidden md:flex">
              <a className="px-8 py-4 transition-colors duation-300 hover:text-theme-500" href={link.projects}>Projects</a>
            </li>
            <li className="hidden md:flex">
              <a className="px-8 py-4 transition-colors duation-300 hover:text-theme-500" href={link.contact}>Contact</a>
            </li>
            <li className="md:hidden h-full flex items-center">
              <input type="checkbox" className="peer group w-16 h-16 z-10 opacity-0 absolute right-0" />
              <a className="w-16 peer-checked:hidden"><FontAwesomeIcon icon={faBars} className="text-3xl" /></a>
              <a className="w-16 hidden peer-checked:block"><FontAwesomeIcon icon={faXmark} className="text-3xl" /></a>
              <nav className="hidden border text-base md:invisible z-0 bg-white peer-checked:block right-0 top-16 absolute flex flex-col items-center divide-y">
                <a className="transition-colors duation-300 hover:text-theme-500 w-32 h-16 flex items-center justify-center" href={link.home}><p>Home</p></a>
                <a className="transition-colors duation-300 hover:text-theme-500 w-32 h-16 flex items-center justify-center" href={link.about}><p>About</p></a>
                <a className="transition-colors duation-300 hover:text-theme-500 w-32 h-16 flex items-center justify-center" href={link.projects}><p>Projects</p></a>
                <a className="transition-colors duation-300 hover:text-theme-500 w-32 h-16 flex items-center justify-center" href={link.contact}><p>Contact</p></a>
              </nav>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
