// router入口，配置router
import Login from '../page/login/index.jsx'
import Article from '../page/article/index.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        // param传参需要占位符
        path: '/login/:id',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    },
])
export default router;