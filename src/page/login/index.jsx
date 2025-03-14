import { useNavigate, useSearchParams } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    return <div>
        {params.get("name")}
        登陆
        <button onClick={() => navigate("/article")}>去文章页</button>
    </div>
}
export default Login;