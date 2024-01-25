import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const LinkButton = (props) => {
  const icon = props.icon ? props.icon : faArrowUpRightFromSquare;
  const animation = props.animate === true ? " hover:-translate-y-1" : "";
  const colors = props.inverted === true ? " bg-white text-theme-600 border-2 border-theme-500 hover:bg-theme-100 hover:border-theme-600" : " bg-theme-500 text-white hover:bg-theme-600";
  const className = props.className ? " " + props.className : "";
  return (
    <a className={"block font-bold text-lg text-center p-4 rounded-lg w-64 uppercase shadow-xl transition duration-300" + colors + animation + className}
      href={props.href}
      target={props.target}>
      {props.text}
      <FontAwesomeIcon icon={icon} className="ml-2" />
    </a>
  )
}

export default LinkButton
