import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";

export const RoutesMain = () => {
const [user,setUser] = useState(null);
    return (
        <Routes>
            <Route path="/user" element={<HomePage user={user}  setUser={setUser}/>}/>
            <Route path="/" element={<LoginPage setUser={setUser}/>} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
};