import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Components/Login/Login"
import Registro from "../Components/Registro/Registro";
import NotFound from "../Components/NotFound"

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/entrar" element={<Login />}></Route>
                    <Route path="/registrar" element={<Registro />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}