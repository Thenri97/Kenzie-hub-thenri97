import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom"
import { useForm, useFormState } from "react-hook-form"
import { useState } from "react"
import { Input } from "../inputs"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerForm.schema"
import { requests } from "../../../services/requests"
import { toast } from 'react-toastify';

export const RegisterForm = () => {
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerFormSchema)
    });

const [loading, setLoading] = useState(false);

    const userRegister = async (payLoad) => {
    try {   
            setLoading(true)
            await requests.post("/users", payLoad)
            toast.success("cadastro realizado com sucesso!")
            navigate("/login")

        } catch (error) {
            console.log(error);
            if(error.response.data.message === "Email already exists"){
                toast.error("Email já cadastrado")
            }
        }finally{
            setLoading(false)
        }
    };
    
    const submit = (payLoad) => {
       userRegister(payLoad)
    };

    return (
        <form className={styles.form__container}
            onSubmit={handleSubmit(submit)}>
            <div className={styles.info__container}>
                <h2>Crie sua conta</h2>
                <p>Rapido é gratis, vamos nessa</p>
            </div>
            <div>
                <Input
                    id="name"
                    label="name"
                    type="text"
                    placeholder="Digite aqui seu nome"
                    {...register("name")}
                    error={errors.name}
                />
            </div>
            <div>
                <Input
                    id="email"
                    label="email"
                    type="email"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                    error={errors.email}
                />
            </div>
            <div>
                <Input
                    id="password"
                    label="password"
                    type="password"
                    placeholder="Digite aqui seu password"
                    {...register("password")}
                    error={errors.password}
                />
            </div>
            <div>
                <Input
                    id="passwordVerify"
                    label="passwordVerify"
                    type="password"
                    required
                    placeholder="Digite aqui seu password novamente"
                    {...register("passwordVerify")}
                    error={errors.passwordVerify}
                />
            </div>
            <div>
                <Input
                    id="bio"
                    label="bio"
                    type="text"
                    required
                    placeholder="Digite aqui sua bio"
                    {...register("bio")}
                    error={errors.bio}
                />
            </div>
            <div>
                <Input
                    id="contact"
                    label="contact"
                    type="number"
                    required
                    placeholder="Digite aqui seu contato"
                    {...register("contact")}
                    error={errors.contact}
                />
            </div>
            <div>
                <select {...register("course_module")} >
                    <option value="firstModule">Primeiro Módulo</option>
                    <option value="SecondModule">Segundo Módulo</option>
                    <option value="ThirdModule">Terceiro Módulo</option>
                </select>

                <button type="submit" className={styles.registerButton} disabled={loading}>Cadastrar</button>
            </div>
        </form>
    )
}