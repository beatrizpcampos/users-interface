import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthService } from '../services/authService'
import logoImg from '../assets/bankly-logo.jpeg'
import "../styles.css";

function Register() {
  const { signup } = useAuthService();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const signupData = {
      name: name,
      email: email,
      password: password
    };

    signup(signupData.name, signupData.email, signupData.password);

    alert("Registro feito com sucesso");
  };

  return (
    <div className="register-container">

      <h1 className="title">Crie uma conta</h1>

      <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
      
      <button onClick={handleSubmit}>Criar conta</button>

      <p>Ja tem uma conta ? <Link to="/" className="link">Acessar</Link></p>

      <div className="divider">
      <img src={logoImg} className="logo-img"/> 
      </div>

    </div>
  );
}

export default Register;
