// router入口，配置router
import Login from '../page/login/index.jsx'
import Article from '../page/article/index.jsx'
import LoginSon from '../page/login/loginson/loginson.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        // param传参需要占位符
        path: '/login',
        element: <Login />,
        children:[
            {
                path: 'loginson',
                element: <LoginSon />
            }
        ]
    },
    {
        path: '/article',
        element: <Article />
    },
])
export default router;