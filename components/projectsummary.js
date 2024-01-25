import Image from 'next/image'

import LinkButton from '../components/linkbutton'

const ProjectSummary = ({title="title", text=["text"], liveLink, repoLink, imageSource}) => {
  text = text.map(line => <p>{line}</p>);
  if (liveLink) {
    liveLink = <LinkButton href={liveLink} text="See live" target="_blank" />
  }
  if (repoLink) {
    repoLink = <LinkButton href={repoLink} text="Git Repo" target="_blank" inverted={true} />
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
