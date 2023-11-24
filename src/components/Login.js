import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onLogin({
        email,
        password,
      });
    };

    function onNavRegister() {
        navigate('/sign-up', { replace: true });
    }

    return (
      <>
        <Header title='Регистрация' onClick={onNavRegister} isOpen={false} />
        <form className="auth__form" onSubmit={handleSubmit}>
            <h2 className="auth__title">Вход</h2>
            <input
                className="auth__form-input"
                placeholder="email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ''}
                required
            ></input>
            <input
                className="auth__form-input"
                placeholder="Пароль"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password || ''}
                required
            ></input>

            <button className="auth__form-submit-btn" type="submit">
                Войти
            </button>
        </form>
      </>
    );
}

export default Login;