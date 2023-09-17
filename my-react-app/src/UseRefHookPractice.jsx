import { useEffect, useState } from "react"
import Comment from "./Comment"

export default function UseRefHookPractice() {
  
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data.slice(0,10)))
  }, [])

  return (
    <>
      <h1>useRef Component is working</h1>
      {
        comments.map( comment=> <Comment comment={comment}></Comment>)
      }
    </>
  )
}