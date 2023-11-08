import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {

    return (
        <Routes>
               
            <Route element={<PublicRoutes />}>
                <Route path="/register" element={<RegisterPage />} /> 
                <Route path="/" element={<LoginPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
                    <Route path="/user" element={<HomePage />} /> 
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
};