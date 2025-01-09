import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Usuario from "./pages/usuario";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/usuario" element={<Usuario />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
