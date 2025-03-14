// 单独文件组件
// 其实就是一个函数返回html及逻辑，最后抛出
import { useNavigate } from "react-router-dom";
const Article = () => {
    const navigate = useNavigate();
    return <div>
        文章组件
        <button onClick={() => navigate("/login")}>去登陆页</button>
    </div>
}
export default Article;
