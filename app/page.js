import Header from '../components/header'
import Footer from '../components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <section id="home" className="h-screen px-2 bg-pattern">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
          <h1 className="font-title uppercase text-6xl font-bold text-neutral-800">Justin St-Amant, here</h1>
          <p className="mt-8 mb-10 text-2xl">A Frontend Developer, ready to hit the ground running on your codebase.</p>
          <a className="block bg-theme-500 text-white font-bold text-lg p-4 rounded-lg w-64 mx-auto uppercase shadow-xl transition hover:bg-theme-600 hover:-translate-y-1 duration-300"
    href="#about">See why
            <i className="fa-solid fa-rocket ml-2"></i>
          </a>
        </div>
      </section>

      <section id="about" className="bg-neutral-50 py-24">
        <div className="w-11/12 mx-auto">
          <h1 className="text-5xl font-bold uppercase text-neutral-800">About Me</h1>
          <div className="h-1.5 w-12 rounded bg-theme-500 top-full mx-auto mt-4 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4 my-8 justify-around text-left">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Get to know me!</h2>
              <p className="my-4">I'm a <strong>Frontend Web Developer</strong>, bringing design and ideation to fruition through web technologies. Check out some of my work in the <a className="font-bold hover:text-theme-700" href="#projects">Projects<i className="fa-solid fa-list-ul ml-1 text-base"></i></a> section below.</p>
              <p className="my-4">I aim to be versatile in all facets - not just programming! I pull my knowledge from many disciplines: engineering, telecommunications, woodworking, skateboarding, <a className="font-bold hover:text-theme-700" href="https://www.tabletop.engineering/" target="_blank">role-playing games<i className="fa-solid fa-arrow-up-right-from-square ml-1 text-base"></i></a>, life-coaching, and more!</p>
              <p className="my-4">I'm <strong>currently looking for a development job</strong>. If you like what you see and you think we'd be a good match, then don't hesitate to contact me.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Technical Skills</h2>
              <div className="flex flex-wrap">
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">HTML</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">CSS</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">C/C++</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Git</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">JavsScript</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">TailwindCSS</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Node</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">React</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Linux</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Responsive Design</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">SQL Basics</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Frameworks & Libraries</div>
              </div>
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Personal Management Skills</h2>
              <div className="flex flex-wrap">
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Communication</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Prioritizing</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Planning</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Writing & Documenting</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Troubleshooting</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Time & Task Management</div>
                <div className="rounded px-4 py-2 mr-4 mb-4 bg-neutral-200 text-neutral-500 font-bold text-base">Autonomous</div>
              </div>
            </div>
          </div>
        </div>
        <a className="block bg-theme-500 text-white font-bold text-lg p-4 rounded-lg w-64 mx-auto uppercase shadow-xl transition hover:bg-theme-600 hover:-translate-y-1 duration-300" href="#projects">My projects<i className="fa-solid fa-list-ul ml-2"></i></a>
      </section>

      <section id="projects" className="py-24">
        <div className="w-11/12 md:w-3/4 mx-auto">
          <h1 className="text-5xl font-bold uppercase my-4 text-neutral-800">Projects</h1>
          <div className="h-1.5 w-12 rounded bg-theme-500 top-full mx-auto mt-4 mb-8"></div>
          <p className="my-8">Here are a few of my projects - available for you to check out!</p>
        </div>
        <div className="my-8 mx-auto w-11/12 lg:w-3/4 text-left flex flex-col gap-24">
          <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
            <img className="w-full shadow-xl rounded-2xl object-cover aspect-[4/3] border" src="/haiku.png"></img>
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-bold text-3xl">Haiku React App</h2>
              <p>I made this little React app to show-off some of my "buzzword haiku".</p>
              <p>This project's goal was to learn React. Success!</p>
              <a className="flex items-center justify-center text-white font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl transition-colors duration-300 bg-theme-500 hover:bg-theme-600"
                href="https://jstamant-haiku.netlify.app/" target="_blank">
                <p>See live</p>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
              <a className="flex items-center justify-center font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl border-2 transition-colors duration-300 bg-white text-theme-500 border-theme-500 hover:bg-theme-100 text-theme-600 hover:border-theme-600" href="https://github.com/jstamant/haiku" target="_blank">
                <p>Git Repo</p>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
            <img className="w-full shadow-xl rounded-2xl object-cover aspect-[4/3] border" src="/zgp.png"></img>
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-bold text-3xl">C/C++ Game</h2>
              <p>A dive into low-level game programming with C/C++.</p>
              <p>Whenever I spend time on this project, I find myself learning more about data-structures and algorithms.</p>
              <a className="flex items-center justify-center font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl border-2 transition-colors duration-300 bg-white text-theme-500 border-theme-500 hover:bg-theme-100 text-theme-600 hover:border-theme-600" href="https://github.com/jstamant/zombie-game-project" target="_blank">
                <p>Git Repo</p>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
            <img className="w-full shadow-xl rounded-2xl object-cover aspect-[4/3] border" src="/burger-burner.jpg"></img>
            <div className="flex flex-col items-center md:items-start gap-4">
              <h2 className="font-bold text-3xl">HTML5 Game</h2>
              <p>My first project for learning JavaScript.</p>
              <p>I wanted to learn how to make portable games using HTML5 and web technologies. Easily done with the help of the Phaser framework.</p>
              <a className="flex items-center justify-center text-white font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl transition-colors duration-300 bg-theme-500 hover:bg-theme-600"
                href="https://jstamant.itch.io/burger-burner" target="_blank">
                <p>See live</p>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
              <a className="flex items-center justify-center font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl border-2 transition-colors duration-300 bg-white text-theme-500 border-theme-500 hover:bg-theme-100 text-theme-600 hover:border-theme-600"
                href="https://github.com/jstamant/burger-burner-deluxe" target="_blank">
                <p>Git Repo</p>
                <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-pattern">
        <div className="w-11/12 mx-auto">
          <h1 className="text-5xl font-bold uppercase my-4 text-neutral-800">Contact</h1>
          <div className="h-1.5 w-12 rounded bg-theme-500 top-full mx-auto mt-4 mb-8"></div>
          <div className="my-8">
            <p className="my-4">Feel free to reach out!</p>
            <p className="my-4">I'm looking for a development position and would love to hear from you if you're interested!<br />I'm excited to see what kind of challenges the future brings!</p>
          </div>
          <a className="block bg-theme-500 text-white font-bold text-lg p-4 rounded-lg w-64 mx-auto uppercase shadow-xl transition hover:bg-theme-600 hover:-translate-y-1 duration-300"
            href="mailto:jstamant24@gmail.com"><i className="fa-regular fa-message mr-2"></i>Message me</a>
        </div>
      </section>

      <Footer />

    </>
  )
}
