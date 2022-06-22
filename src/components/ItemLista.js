import React, { useContext } from "react";

import { UsuarioContext } from "../UsuarioContext";

const ItemLista = (props) => {

    const usuario = useContext(UsuarioContext);

    let likeButtons;

    if (usuario.dados.usuario_id) {
        likeButtons = (
            <>
                <span className="float-start" onClick={props.likeClick}>
                    <i className="bi bi-hand-thumbs-up me-2"></i>
                    {props.n_likes}
                </span>
                <span className="float-end" onClick={props.dislikeClick}>
                    <i className="bi bi-hand-thumbs-down me-2"></i>
                    {props.n_dislikes}
                </span>
            </>
        );
    }

    return (
        <div className="card col-sm-3 col-6 mt-2">
            <img className="card-img-top" src={props.foto} alt="Veículo em Destaque" />
            <div className="card-body">
                <h4 className="card-title">
                    {props.marca} {props.modelo} ({props.ano})
                </h4>
                <p className="card-text">
                    Preço R$: &nbsp;
                    {Number(props.preco).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                    })}
                </p>
                {likeButtons}
            </div>
        </div>
    );
};

export default ItemLista;