import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MenuSuperior from "./components/MenuSuperior";
import ListagemVeiculos from "./components/ListagemVeiculos";
import UserLogin from "./components/UserLogin";
import EstatisticaLikes from "./components/EstatisticaLikes";

import { UsuarioContext } from "./UsuarioContext.js";

function App() {

    const [dados, setDados] = useState({})

    return (
        <UsuarioContext.Provider value={{ dados, setDados }}>
            <Fragment>
                <MenuSuperior />
                <Routes>
                    <Route path="/" element={<ListagemVeiculos />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="estatistica" element={<EstatisticaLikes />} />
                </Routes>
            </Fragment>
        </UsuarioContext.Provider>
    );
}
export default App;