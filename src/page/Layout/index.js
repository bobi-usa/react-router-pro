import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      我是一级路由Layout组件
      {/* 要将默认二级路由path置为 '/'*/}
      <Link to="/">面板</Link>
      <Link to="/about">关于</Link>
      {/* 配置二级路由的出口 */}
      <Outlet />
    </div>
  )
}

export default Layout
