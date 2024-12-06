import { useParams } from "react-router-dom"

const Post = () => {
  const params = useParams()
  const id = params.id
  const name = params.name
  return <div>这是Post页面 {id} - {name}</div>
}

export default Post
