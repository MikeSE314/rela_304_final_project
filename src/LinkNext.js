import './LinkNext.css'

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
        <a href={current+1}>Chapter {current+1}</a>
      </div>
    )
  }
}

export default LinkNext
