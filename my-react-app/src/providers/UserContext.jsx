import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    // const [userInfo, setUserInfo] = useState([]);
    const [user,setUser] = useState(null);
    const [nome,setNome] =useState("Henrique");
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>)
}