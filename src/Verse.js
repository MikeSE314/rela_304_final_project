import './Verse.css'
import Bite from './Bite'

function Verse(props) {
  return (
    <div>
      {props.no}
      {props.verse.map((bite, index) =>
        <Bite bite={bite} key={index} />
      )}
      <br />
      <br />
    </div>
  )
}

export default Verse
