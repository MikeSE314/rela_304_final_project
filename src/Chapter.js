import Verse from './Verse'
import './Chapter.css'

function Chapter(props) {
  return (
    <div className="Chapter">
      <h1>Chapter {props.no}</h1>
      {props.chapter.map((verse, index) =>
        <Verse verse={verse} no={index+1} key={index} />
      )}
    </div>
  )
}

export default Chapter
