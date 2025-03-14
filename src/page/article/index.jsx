// 单独文件组件
// 其实就是一个函数返回html及逻辑，最后抛出
import { Link } from "react-router-dom";
const Article = () => {
    return <div>
        文章组件
        <Link to="/login">登录</Link>
    </div>
}
export default Article;