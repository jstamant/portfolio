import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 text-left text-base">
      <div className="flex flex-col md:flex-row-reverse justify-between w-11/12 mx-auto">
        <div className="my-8">
          <h1 className="uppercase font-bold mb-4 text-xl">Socials</h1>
          <nav className="text-2xl">
            <a className="fa-brands fa-github px-1" href="https://github.com/jstamant"></a>
            <a className="fa-brands fa-linkedin px-1" href="https://www.linkedin.com/in/justinstamant/"></a>
            <a className="fa-brands fa-instagram px-1" href="https://www.instagram.com/jstamant_/"></a>
            <a className="fa-regular fa-envelope px-1" href="mailto:jstamant24@gmail.com"></a>
          </nav>
        </div>
        <div className="my-8">
          <h1 className="uppercase font-bold mb-4 text-xl">Justin St-Amant</h1>
          <p>A Frontend Developer, ready to hit the ground running on your codebase.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
