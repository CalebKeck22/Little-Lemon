import { useNavigate } from "react-router-dom";
export function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        alert("Welcome, User!");
        navigate('/');
    };

    return (
        <a href="/Login" className="login-link" onClick={handleLogin}>Login</a>
    )
}