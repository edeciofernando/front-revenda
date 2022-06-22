import React, { useState, useEffect, useContext } from "react";
import { inAxios } from "../config_axios";

import ItemLista from "./ItemLista";

import { UsuarioContext } from "../UsuarioContext";

const ListagemVeiculos = () => {

    const [carros, setCarros] = useState([]);
    const usuario = useContext(UsuarioContext);

    const getCarros = async () => {
        const lista = await inAxios.get("carros");
        // console.log(lista);
        setCarros(lista.data);
    };

    // define o método que será executado após renderizar o componente
    useEffect(() => {
        getCarros();
    }, []);

    const usuarioLike = async (id, index) => {

        let voto = {
            usuario_id: usuario.dados.usuario_id,
            carro_id: id,
            like: 1,
        };

        const config = {
            headers: { Authorization: `Bearer ${usuario.dados.token}` },
        };

        await inAxios.post("likes", voto, config);
        
        // atualiza o array
        let newCarros = [...carros];
        newCarros[index].n_likes = carros[index].n_likes + 1;
        setCarros(newCarros);

        alert("Ok! Obrigado pela sua participação");
    };

    return (
        <div className="container">
            <div className="row">
                {carros.map( (carro, index) => (
                    <ItemLista
                        foto={carro.foto}
                        modelo={carro.modelo}
                        marca={carro.marca}
                        preco={carro.preco}
                        ano={carro.ano}
                        n_likes={carro.n_likes}
                        n_dislikes={carro.n_dislikes}
                        likeClick={() => usuarioLike(carro.id, index)}
                        key={carro.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListagemVeiculos;