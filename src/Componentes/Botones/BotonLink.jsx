import { Link } from "react-router-dom"



function BotonLink( {text,href}) {
  return (
    <Link to={href}>
        {text}
    </Link>
  )
}

export default BotonLink