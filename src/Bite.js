import './Bite.css'

function Bite(props) {
  return (
    <span className="Bite">
      <span title={props.bite.other}> {props.bite.eng} </span>
    </span>
  )
}

export default Bite
