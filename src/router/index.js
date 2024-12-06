import Login from '../page/Login'
import Article from '../page/Article'
import Post from '../page/Post'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/login',
    // 注意: 这里写的是JSX, 并不是和Vue一样的组件名
    element: <Login />,
  },
  {
    path: '/article',
    element: <Article />,
  },
  {
    path: '/post/:id/:name',
    element: <Post />,
  },
])

export default router
