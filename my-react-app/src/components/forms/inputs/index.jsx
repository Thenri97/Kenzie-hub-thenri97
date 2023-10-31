import styles from "./styles.module.scss";
import {forwardRef} from "react";

export const Input = forwardRef(({error,label,id, ...rest},ref) => {
 
        return(
            <div className={styles.input__container}>
                <label htmlFor={id}>{label}</label>
                <input ref={ref} {...rest}/>
                {error ? <p>{error.message}</p> : null}
            </div>
        )
    }     
)  