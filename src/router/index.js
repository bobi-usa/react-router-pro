import Layout from '../page/Layout'
import Board from '../page/Board'
import About from '../page/About'
import NotFound from '../page/NotFound'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'

const router = createBrowserRouter([
  // url 带#
  // const router = createHashRouter([
  {
    path: '/',
    // 注意: 这里写的是JSX, 并不是和Vue一样的组件名
    element: <Layout />,
    children: [
      // 设置为默认二级路由 一级路由访问的时候 默认渲染此二级路由
      {
        index: true,
        element: <Board />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ]
  },
  // 404路由：放在数组末尾，以 * 作为路由path
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
