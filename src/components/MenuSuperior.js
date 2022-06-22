import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./MenuSuperior.css";

import { UsuarioContext } from "../UsuarioContext";

const MenuSuperior = () => {

    const navigate = useNavigate();

    const usuario = useContext(UsuarioContext);

    const loginLogout = () => {
        usuario.setDados({ usuario_id: null, usuario_nome: "", token: "" });
        navigate("/login")
    }

    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <Link className="navbar-brand" to="/">
                <img
                    src="herbie.png"
                    alt="Revenda Herbie"
                    width="100"
                    className="float-start me-2"
                />
                <h3>Revenda Herbie</h3>
                <h5>Veículos em Destaque</h5>
            </Link>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/estatistica">
                        Estatística
                    </Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link" onClick={loginLogout}>
                        <i className="bi bi-people-fill me-2"></i>
                        {usuario.dados.usuario_nome ? usuario.dados.usuario_nome + " (sair)" :
                            "(identifique-se)"}
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default MenuSuperior;