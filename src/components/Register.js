import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
        email,
        password,
    });
  };

  function onNavLogin() {
    navigate('/sign-in', { replace: true });
  }


    return (
      <>
        <Header title='Войти' onClick={onNavLogin} />
        <form className="auth__form" onSubmit={handleSubmit}>
            <h2 className="auth__title">Регистрация</h2>
                <input
                    className="auth__form-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ''}
                    maxLength="40"
                    minLength="2"
                    required
                ></input>
                <input
                    className="auth__form-input"
                    placeholder="Пароль"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password || ''}
                    maxLength="40"
                    minLength="2"
                    required
                ></input>
                <button className="auth__form-submit-btn" type="submit">
                    Зарегистрироваться
                </button>
                <div className="auth__signin">
                    <p className="auth__signin_text">Уже зарегистрированы?</p>
                    <button
                        className="auth__signin_btn"
                        type="submit"
                        onClick={onNavLogin}
                    >
                    Войти
                    </button>
                </div>
        </form>
      </>
    );
}

export default Register;