import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthService } from '../services/authService'
import backgroundImg from '../assets/background-img.webp'
import logoImg from '../assets/bankly-logo.jpeg'
import "../styles.css";

function Login() {
  const { login } = useAuthService();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    login(loginData.email, loginData.password);
  };

  function enterCont() {
    if (sessionStorage.getItem('auth-token')) {
      navigate("/user")
    }else{
      return
    }
  }

  return (
    <>
    <header className="header">
        <img src={logoImg} className="header-logo" />
        <h1 className="title-header">Crie e escale suas próprias soluções financeiras</h1>
        <Link to="https://www.bankly.com.br/" className="link-header">Saiba Mais</Link>
      </header>
    <div className="container">
      <img src={backgroundImg} className="background-img" />
      <div className="login-container">

        <h1 className="title">Acesse sua conta</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email "
            value={email}
            onChange={(email) => setEmail(email.target.value)}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            onChange={(password) => setPassword(password.target.value)}
            required
            type="password"
          />
          <button type="submit" onClick={enterCont}>Login</button>
        </form>

        <p>Não tem uma conta ? <Link to="/register" className="link">Cadastre-se</Link></p>

        <Link to="https://openfinance.bankly.com.br/contato" className="link-contato">Entre em contato</Link>
      </div>
    </div>
    </>
  );
}

export default Login;
