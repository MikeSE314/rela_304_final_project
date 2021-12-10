import './LinkPrev.css'

import { Link } from "react-router-dom"

function LinkPrev(props) {
  let current = parseInt(props.current)

  if (current <= 1) {
    return (
      <div className="LinkPrev">
      </div>
    )
  } else {
    return (
      <div className="LinkPrev">
        <Link to={'/'+(current-1)}>Chapter {current-1}</Link>
      </div>
    )
  }
}

export default LinkPrev
