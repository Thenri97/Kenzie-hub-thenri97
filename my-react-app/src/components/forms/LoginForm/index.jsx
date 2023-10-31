import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Input } from "../inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { useContext, useState } from "react";
import { requests } from "../../../services/requests";
import { toast } from 'react-toastify';
import { UserContext } from "../../../providers/UserContext";


export const LoginForm = () => {
    const { user, setUser } = useContext(UserContext);
    const {userLogin} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const submit = (payLoad) => {
        userLogin(payLoad,toast,navigate,setUser,requests,setLoading)
    };

    return (
        <form className={styles.Form}
            onSubmit={handleSubmit(submit)}>
            <div className={styles.h2Div}>
                <h2>Login</h2>
            </div>
            <div>
                <Input label="Email"
                    type="email"
                    id="email"
                    placeholder="Digite seu email..."
                    {...register("email")}
                    error={errors.email} />
            </div>
            <div>
                <Input label="Password"
                    type="password"
                    id="password"
                    placeholder="Digite seu password..."
                    {...register("password")}
                    error={errors.password} />
            </div>
            <div>
                <button className={styles.acessButton} type="submit" disabled={loading}>Entrar</button>
                <p href="">Ainda não possui uma conta?</p>
                <button
                    className={styles.registerButton}
                    onClick={() => navigate("/register")}>Cadastre-se</button>
            </div>

        </form>
    )
}