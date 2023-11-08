import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { TechCard } from "./TechCard"
import styles from "./styles.module.scss";


export const TechList = () => {

    const { user } = useContext(UserContext);
    console.log(user.techs);

    return (
        <div>
            <ul className={styles.list}>
                {

                    user?.techs.map((card) => (
                        <TechCard
                            id = {card.id}
                            nome={card.title}
                            level={card.status}
                        />
                    )) 
                }
            </ul>
        </div>
    )
}