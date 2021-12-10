import './LinkNext.css'

import { Link } from "react-router-dom"

function LinkNext(props) {
  let current = parseInt(props.current)

  if (current >= 66) {
    return (
      <div className="LinkNext">
      </div>
    )
  } else {
    return (
      <div className="LinkNext">
        <Link to={'/'+(current+1)}>Chapter {current+1}</Link>
      </div>
    )
  }
}

export default LinkNext
