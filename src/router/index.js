import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    // 注意: 这里写的是JSX, 并不是和Vue一样的组件名
    element: <Layout />,
    children: [
      {
        path: '/board',
        element: <Board />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
])

export default router
