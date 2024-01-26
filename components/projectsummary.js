import Image from 'next/image'

import LinkButton from '../components/linkbutton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectSummary = (props) => {
  const text = []
  for (let line = 0; line < props.text.length; line++) {
    text.push(<p key={line}>{props.text[line]}</p>);
  }
  let liveLinkButton;
  if (props.liveLink) liveLinkButton = <LinkButton href={props.liveLink} text="See live" target="_blank" />;
  let repoLinkButton;
  if (props.repoLink) repoLinkButton = <LinkButton href={props.repoLink} text="Git Repo" target="_blank" inverted={true} />;
  let image;
  if (props.imageSource) {
    image = <img className="absolute w-full" src={props.imageSource}></img>
  }
  return (
    <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-center">
      <div className="relative">
        <img className="w-full" src="laptop.svg"></img>
        <div className="absolute top-[4%] left-[11.5%] w-[77%] h-[86%] overflow-hidden">
          {image}
          <a className="w-full h-full absolute uppercase text-center transition-opacity duration-300 opacity-0 hover:opacity-100 backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
            href={props.liveLink ? props.liveLink : props.repoLink} target="_blank">
            <div className="bg-white border-2 border-neutral-600 rounded-full w-12 h-12 text-base flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <h2 className="font-bold text-3xl">{props.title}</h2>
        {text}
        {liveLinkButton}
        {repoLinkButton}
      </div>
    </div>
  )
}

export default ProjectSummary
