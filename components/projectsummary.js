import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectSummary = ({title="title", text=["text"], liveLink, repoLink, imageSource}) => {
  text = text.map(line => <p>{line}</p>);
  if (liveLink) {
    liveLink = <a className="flex items-center justify-center text-white font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl transition-colors duration-300 bg-theme-500 hover:bg-theme-600"
                 href={liveLink} target="_blank">
                 <p>See live</p>
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
               </a>
  }
  if (repoLink) {
    repoLink = <a className="flex items-center justify-center font-bold text-lg h-16 rounded-lg w-64 uppercase shadow-xl border-2 transition-colors duration-300 bg-white text-theme-500 border-theme-500 hover:bg-theme-100 text-theme-600 hover:border-theme-600" href={repoLink} target="_blank">
                 <p>Git Repo</p>
                 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
               </a>
  }
  if (imageSource) {
    imageSource = <img className="object-cover object-top aspect-[4/3] absolute top-[4%] left-[11.5%] w-[77%] h-[86%]" src={imageSource}></img>
  }
  return (
    <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
      <div className="relative">
        <img className="w-full" src="laptop.svg"></img>
        {imageSource}
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <h2 className="font-bold text-3xl">{title}</h2>
        {text}
        {liveLink}
        {repoLink}
      </div>
    </div>
  )
}

export default ProjectSummary
