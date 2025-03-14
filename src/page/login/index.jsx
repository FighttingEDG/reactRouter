import { useNavigate, useParams } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const params = useParams();
    let id = params.id;
    return <div>
        {id}
        登陆
        <button onClick={() => navigate("/article")}>去文章页</button>
    </div>
}
export default Login;