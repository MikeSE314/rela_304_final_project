import Chapter from './Chapter'
import LinkPrev from './LinkPrev'
import LinkNext from './LinkNext'
import { useState, useEffect } from "react";

import {
  useParams
} from "react-router-dom";

import './ChapterWrapper.css'

function ChapterWrapper() {
  let { id } = useParams()
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    fetch(`/chapters/chapter_${id}.json`).then(response=>response.json()).then(json => {
      setChapter(json)
    })
  }, [id])

  return (
    <div className="ChapterWrapper">
      <LinkPrev current={id} />
      <LinkNext current={id} />
      <Chapter no={id} chapter={chapter} />
    </div>
  )
}

export default ChapterWrapper
