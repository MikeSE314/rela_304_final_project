import './LinkPrev.css'

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
        <a href={current-1}>Chapter {current-1}</a>
      </div>
    )
  }
}

export default LinkPrev
