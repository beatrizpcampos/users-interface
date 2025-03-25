import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthService } from '../services/authService'
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

  return (
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
        <button type="submit" onClick={sessionStorage.getItem('auth-token') ? () => navigate("/user") : alert('User not found')}>Login</button>
      </form>

      <p>Não tem uma conta ? <Link to="/register" className="link">Cadastre-se</Link></p>

      <img src={logoImg} className="logo-img"/> 

    </div>
  );
}

export default Login;
