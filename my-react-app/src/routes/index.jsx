import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";


export const RoutesMain = () => {
const [user,setUser] = useState(null);
    return (
        <Routes>
            <Route path="/" element={<HomePage user={user}/>}/>
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
};