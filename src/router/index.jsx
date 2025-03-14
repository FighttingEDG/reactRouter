// router入口，配置router
import Login from '../page/login/index.jsx'
import Article from '../page/article/index.jsx'
import LoginSon from '../page/login/loginson/loginson.jsx'
import NotFound from '../page/notfound/index.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        // param传参需要占位符
        path: '/login',
        element: <Login />,
        children:[
            {
                index: true,
                element: <LoginSon />
            }
        ]
    },
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '*',
        element: <NotFound />
    }
])
export default router;