import { Link  } from "react-router-dom";
import React from "react";
import logoImg from '../assets/bankly-logo.jpeg'
import "../styles.css";

function User() {
  return (
    <>
    <header className="header">
        <img src={logoImg} className="header-logo" />
        <h1 className="title-header">Bem vindo ao nosso site {sessionStorage.getItem('username')}</h1>
        <Link to="https://openfinance.bankly.com.br/contato" className="link-header">Entre em contato</Link>
    </header>
    <div className="user-container">
    </div>
    </>
  );
}

export default User;
