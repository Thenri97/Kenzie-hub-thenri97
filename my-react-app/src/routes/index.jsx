import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";


export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/user" element={<HomePage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
};