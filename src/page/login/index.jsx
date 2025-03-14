import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return <div>
        登陆
        <button onClick={() => navigate("/article")}>去文章页</button>
    </div>
}
export default Login;