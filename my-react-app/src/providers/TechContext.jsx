import { createContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {




    // const [cards, setCards] = useState([
    //     { techName: "React", level: "Avançado" },
    //     { techName: "Java", level: "Iniciante" }
    // ]);
    
const numbers = "123"

    return (
        <TechContext.Provider value = {{numbers}} >
            {children}
        </TechContext.Provider>)
}



