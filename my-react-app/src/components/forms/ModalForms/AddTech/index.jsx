import React, { useContext } from "react";
import { UserContext } from "../../../../providers/UserContext";
import styles from "./styles.module.scss";
import { useForm } from 'react-hook-form';
import { Input } from "../../inputs";
import { requests } from "../../../../services/requests";

export const AddTech = () => {
    const token = localStorage.getItem("@TOKEN");

    const { setVisible } = useContext(UserContext);
    const { user} = useContext(UserContext);
    console.log(user);

    const visibleOff = () => {
        setVisible(false)
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const postTech = async (dataAS) => {

        try {
            const { data } = await requests.post(`/users/techs`, dataAS, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            console.log(data)
            alert("Card Criado com sucesso!");

        } catch (error) {
            console.log(error);
        }
    }; 

    const submit = (payload) => {
        postTech(
            {
                "title": payload.title,
                "status": payload.status
            })
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={styles.modal}>
                <div className={styles.modal__header}>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={() => visibleOff()}>X</button>
                </div>
                <div className={styles.modal__body}>
                    <Input
                        id="title"
                        label="Nome"
                        type="text"
                        placeholder="Digite aqui..."
                        {...register("title")}
                        error={errors.title}
                    />
                    <div>
                        <label>Selecionar status</label>
                        <select
                            id="status"
                            name="status"
                            {...register("status")} >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Cadastrar Tecnologia</button>
                    </div>
                </div>
            </div>
        </form>
    );
}




