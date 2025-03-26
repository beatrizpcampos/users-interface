import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAuthService } from '../services/authService'
import iconImg from '../assets/icon-img.webp'
import logoImg from '../assets/bankly-logo.jpeg'
import "../styles.css";

function Register() {
  const { signup } = useAuthService();
  const navigate = useNavigate()
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
    return(
      setName(''),
      setEmail(''),
      setPassword(''),
      navigate("/")
    )
  };

  return (
    <>
      <header className="header">
        <img src={logoImg} className="header-logo" />
        <h1 className="title-header">Crie e escale suas próprias soluções financeiras</h1>
        <Link to="https://www.bankly.com.br/" className="link-header">Saiba Mais</Link>
      </header>
      <div className="container" style={{ backgroundColor: '#004998' }}>

        <div className="section-container">
          <h1 className="title-register">Bankly para todos</h1>
          <p className="subtitle-register">Estamos preparados para trabalhar com qualquer tipo de segmento e modelo de negócio.</p>
          <p className="subtitle-register">Com nossa plataforma de Banking as a Service, você cria sua própria solução, desde uma conta digital completa, com PIX, emissão de cartão, boleto, TEDs e muitos outros recursos de forma modular.</p>
          <img src={iconImg} className="icon-img" />
        </div>

        <div className="register-container">
          <h1 className="title">Crie uma conta</h1>

          <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button onClick={handleSubmit}>Criar conta</button>

          <p>Ja tem uma conta ? <Link to="/" className="link">Acessar</Link></p>

          <Link to="https://openfinance.bankly.com.br/contato" className="link-contato">Entre em contato</Link>
        </div>
      </div>
    </>
  );
}

export default Register;
