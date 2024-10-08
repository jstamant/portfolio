import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'

import ProjectSummary from '../components/projectsummary'
import Skill from '../components/skill'
import LinkButton from '../components/linkbutton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faFileLines, faListUl, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons'

export default function Page() {
  return (
    <>
      <Header />
      <section id="home" className="h-screen px-2 bg-pattern">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
          <h1 className="font-title uppercase text-6xl font-bold text-neutral-800">Justin <span className="whitespace-nowrap">St-Amant,</span> here</h1>
          <p className="mt-8 mb-10 text-2xl">{process.env.site.subtitle}</p>
          <LinkButton href="#about" text="See why" icon={faRocket} animate={true} className="mx-auto" />
        </div>
      </section>

      <section id="about" className="bg-neutral-50 py-24">
        <div className="w-11/12 mx-auto">
          <h1 className="text-5xl font-bold uppercase text-neutral-800">About Me</h1>
          <div className="h-1.5 w-12 rounded bg-theme-500 top-full mx-auto mt-4 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4 my-8 justify-around text-left">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Get to know me!</h2>
              <p className="my-4">I'm a <strong>Full-Stack Web Developer</strong>, bringing design and ideation to fruition through web technologies. My most recent work-experience has me specializing in <strong>Vue</strong>, <strong>ColdFusion</strong>, and <strong>SQL Server</strong>. Check out some of my work in the <a className="font-bold hover:text-theme-700" href="#projects">Projects<FontAwesomeIcon icon={faListUl} className="ml-1 text-base" /></a> section below, or check out my <Link className="font-bold hover:text-theme-700" href="/resume" target="_blank">resume<FontAwesomeIcon icon={faFileLines} className="ml-1 text-base" /></Link></p>
              <p className="my-4">I aim to be versatile in all facets - not just programming! I pull my knowledge from many disciplines: engineering, telecommunications, woodworking, skateboarding, <a className="font-bold hover:text-theme-700" href="https://www.tabletop.engineering/" target="_blank">role-playing games<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-base" /></a>, life-coaching, and more!</p>
              <p className="my-4">I'm <strong>currently looking for a development job</strong>. If you like what you see and you think we'd be a good match, then don't hesitate to contact me.</p>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Technical Skills</h2>
              <div className="flex flex-wrap">
                <Skill>Vue</Skill>
                <Skill>ColdFusion/CFML</Skill>
                <Skill>SQL Server</Skill>
                <Skill>JavsScript</Skill>
                <Skill>TailwindCSS</Skill>
                <Skill>REST API</Skill>
                <Skill>Git</Skill>
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>C/C++</Skill>
                <Skill>Node</Skill>
                <Skill>React</Skill>
                <Skill>Linux</Skill>
                <Skill>Emacs</Skill>
                <Skill>Responsive Design</Skill>
                <Skill>Frameworks & Libraries</Skill>
              </div>
              <h2 className="text-3xl font-bold text-neutral-800 my-4">Personal Management Skills</h2>
              <div className="flex flex-wrap">
                <Skill>Communication</Skill>
                <Skill>Prioritizing</Skill>
                <Skill>Planning</Skill>
                <Skill>Writing & Documenting</Skill>
                <Skill>Troubleshooting</Skill>
                <Skill>Time & Task Management</Skill>
                <Skill>Autonomous</Skill>
              </div>
            </div>
          </div>
        </div>
        <LinkButton href="#projects" text="My projects" icon={faListUl} animate={true} className="mx-auto" />
      </section>

      <section id="projects" className="py-24">
        <div className="w-11/12 md:w-3/4 mx-auto">
          <h1 className="text-5xl font-bold uppercase my-4 text-neutral-800">Projects</h1>
          <div className="h-1.5 w-12 rounded bg-theme-500 top-full mx-auto mt-4 mb-8"></div>
          <p className="my-8">Here are a few of my projects - available for you to check out!</p>
        </div>
        <div className="my-8 mx-auto w-11/12 lg:w-3/4 text-left flex flex-col gap-24">
          <ProjectSummary
            title="Haiku React App"
            text={['I made this little React app to show-off some of my "buzzword haiku".', "This project's goal was to learn React. Success!"]}
            liveLink="https://jstamant-haiku.netlify.app/"
            repoLink="https://github.com/jstamant/haiku"
            imageSource="/haiku.png"
          />
          <ProjectSummary
            title="C/C++ Game"
            text={['A dive into low-level game programming with C/C++.', 'Whenever I spend time on this project, I find myself learning more about data-structures and algorithms.']}
            repoLink="https://github.com/jstamant/zombie-game-project"
            imageSource="/zgp.png"
          />
          <ProjectSummary
            title="HTML5 Game"
            text={['My first project for learning JavaScript.', 'I wanted to learn how to make portable games using HTML5 and web technologies. Easily done with the help of the Phaser framework.']}
            liveLink="https://jstamant.itch.io/burger-burner"
            repoLink="https://github.com/jstamant/burger-burner-deluxe"
            imageSource="/burger-burner.jpg"
          />
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
          <LinkButton href="mailto:jstamant24@gmail.com" text="Message me" icon={faMessage} animate={true} className="mx-auto"/>
        </div>
      </section>

      <Footer />

    </>
  )
}
