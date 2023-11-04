import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requests } from "../services/requests";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //Função de Autologin
    useEffect(() => {

        const token = localStorage.getItem("@TOKEN")
        console.log(token)

        // alert("Houve uma montagem") 
        if (token) {
            const getUser = async () => {

                try {
                    const { data } = await requests.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                  
                    console.log(data);
                    setUser(data)
                    navigate("/user")
                } catch (error) {
                    console.log(error);
                }

            }
            getUser()
        }
    }, [])



    //Função de Registro 
    const userRegister = async (payLoad, setLoading, toast, navigate, requests) => {
        try {
            setLoading(true)
            await requests.post("/users", payLoad)
            toast.success("cadastro realizado com sucesso!")
            navigate("/")

        } catch (error) {
            console.log(error);
            if (error.response.data.message === "Email already exists") {
                toast.error("Email já cadastrado")
            }
        } finally {
            setLoading(false)
        }
    };
    //Função de Login
    const userLogin = async (payLoad, toast, navigate, setUser, requests, setLoading) => {
        try {
            setLoading(true)
            const { data } = await requests.post("/sessions", payLoad)
            toast.success("Login efetuado!")
            localStorage.setItem("@TOKEN",(data.token))
            navigate("/user")
            setUser(data.user)
            console.log(data.user);
        } catch (error) {
            console.log(error);
            if (error.response.data.message === "Incorrect email / password combination") {
                toast.error("credencias invalidas")
            }
        } finally {
            setLoading(false)
        }
    }

    //Função de logout
    const logout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    //FUNÇÂO PARA RETORNAR A PÁGINA DE USUÁRIO SE O TOKEN EXISTE



    return (
        <UserContext.Provider value={{ user, setUser, userRegister, userLogin, logout }}>
            {children}
        </UserContext.Provider>)
}