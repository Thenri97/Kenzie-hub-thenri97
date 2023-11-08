import { useContext } from "react";
import { requests } from "../../../services/requests";
import styles from "./styles.module.scss";
import { UserContext } from "../../../providers/UserContext";

export const TechCard = ({ nome, level, id }) => {
    const token = localStorage.getItem("@TOKEN")

    const deletePost = async () => {

        try {
            const { data } = await requests.delete(`users/techs/${id}

                `, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            alert("Card Deletado!")

        } catch (error) {
            console.log(error);
        }

    }

    const handleClickRemove = () => {
        console.log(`Clicou no card com ID: ${id}`);
        deletePost()

    };

    const {visible, setVisible} = useContext(UserContext);
    const {editingTech,setEditing} = useContext(UserContext);
    const {componentUnvisible} = useContext(UserContext);
    
    
    const showEditModal = () => {
        componentUnvisible()
        setVisible(false)
        
    }
    
    return (

        <li id={id} className={styles.card} >
            <h2>{nome}</h2>
            <div className={styles.tech_container}>
                <p class="headline">{level}</p>
                <div>
                    <svg onClick={showEditModal}xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 15 15" fill="none">
                        <path d="M2.8125 12.1875H3.5L10.4219 5.26562L9.73438 4.57812L2.8125 11.5V12.1875ZM12.4063 4.59375L10.4063 2.59375L11.0625 1.9375C11.2396 1.76042 11.4583 1.67188 11.7188 1.67188C11.9792 1.67188 12.1979 1.76042 12.375 1.9375L13.0625 2.625C13.2396 2.80208 13.3281 3.02083 13.3281 3.28125C13.3281 3.54167 13.2396 3.76042 13.0625 3.9375L12.4063 4.59375ZM11.75 5.25L3.875 13.125H1.875V11.125L9.75 3.25L11.75 5.25ZM10.0781 4.92188L9.73438 4.57812L10.4219 5.26562L10.0781 4.92188Z" fill="white" />
                    </svg>

                    <svg onClick={handleClickRemove} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M5.16571 16.625C4.83914 16.625 4.55959 16.5087 4.32703 16.2762C4.09448 16.0436 3.97821 15.7641 3.97821 15.4375V4.15625H3.16675V2.96875H6.88758V2.375H12.1126V2.96875H15.8334V4.15625H15.022V15.4375C15.022 15.7542 14.9032 16.0312 14.6657 16.2688C14.4282 16.5062 14.1511 16.625 13.8345 16.625H5.16571ZM13.8345 4.15625H5.16571V15.4375H13.8345V4.15625ZM7.26362 13.7354H8.45112V5.83854H7.26362V13.7354ZM10.549 13.7354H11.7365V5.83854H10.549V13.7354Z" fill="white" />
                    </svg>
                </div>
            </div>
        </li >
    )
}