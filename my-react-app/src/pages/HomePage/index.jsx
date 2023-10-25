import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"

export const HomePage = ({user}) => {
    
    const navigate = useNavigate();
    
    const logout = () => {
        navigate("/login")
        localStorage.removeItem("@TOKEN")
    }
    return (
        <>
           <header className={styles.Header}>
                <div className={styles.HeaderDiv}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="18" viewBox="0 0 99 18" fill="none">
                        <path d="M0.598877 17.1181H3.26797V12.6376L4.58095 10.636L8.03906 17.1181H11.2321L6.49185 8.4111L11.1766 1.35159H7.97742L3.43441 8.30332H3.26797V1.35159H0.598877V17.1181Z" fill="#FF577F" />
                        <path d="M16.4844 17.349C18.8268 17.349 20.4049 15.9248 20.7747 13.7308L18.346 13.5306C18.081 14.4313 17.4029 14.9009 16.5276 14.9009C15.2146 14.9009 14.3824 13.8154 14.3824 12.0525V12.0448H20.8302V11.1441C20.8302 7.12545 18.8823 5.13924 16.3796 5.13924C13.5934 5.13924 11.7873 7.61046 11.7873 11.2595C11.7873 15.0087 13.5688 17.349 16.4844 17.349ZM14.3824 10.0124C14.4379 8.66515 15.2578 7.58736 16.4228 7.58736C17.5632 7.58736 18.3522 8.60356 18.3583 10.0124H14.3824Z" fill="#FF577F" />
                        <path d="M25.5169 10.2818C25.5231 8.75753 26.2505 7.86451 27.3107 7.86451C28.3648 7.86451 28.9997 8.72674 28.9936 10.1741V17.1181H31.6195V9.58897C31.6195 6.83291 30.325 5.13924 28.3525 5.13924C26.947 5.13924 25.9299 6.00147 25.5046 7.3795H25.3937V5.29321H22.891V17.1181H25.5169V10.2818Z" fill="#FF577F" />
                        <path d="M33.987 17.1181H41.945V14.5006H37.4328V14.4159L41.7847 7.42569V5.29321H34.1473V7.9107H38.6225V7.99538L33.987 15.1627V17.1181Z" fill="#FF577F" />
                        <path d="M44.3001 17.1181H46.9261V5.29321H44.3001V17.1181ZM45.6192 3.76891C46.4021 3.76891 47.0432 3.02216 47.0432 2.10604C47.0432 1.19762 46.4021 0.450867 45.6192 0.450867C44.8426 0.450867 44.2015 1.19762 44.2015 2.10604C44.2015 3.02216 44.8426 3.76891 45.6192 3.76891Z" fill="#FF577F" />
                        <path d="M53.6917 17.349C56.0341 17.349 57.6121 15.9248 57.982 13.7308L55.5533 13.5306C55.2882 14.4313 54.6102 14.9009 53.7348 14.9009C52.4219 14.9009 51.5897 13.8154 51.5897 12.0525V12.0448H58.0374V11.1441C58.0374 7.12545 56.0896 5.13924 53.5869 5.13924C50.8007 5.13924 48.9946 7.61046 48.9946 11.2595C48.9946 15.0087 50.776 17.349 53.6917 17.349ZM51.5897 10.0124C51.6452 8.66515 52.465 7.58736 53.63 7.58736C54.7704 7.58736 55.5594 8.60356 55.5656 10.0124H51.5897Z" fill="#FF577F" />
                        <path d="M64.5122 17.1181H67.1813V10.6052H72.5997V17.1181H75.2626V1.35159H72.5997V7.85681H67.1813V1.35159H64.5122V17.1181Z" fill="#FF577F" />
                        <path d="M83.8328 12.0833C83.839 13.6692 82.9698 14.5006 82.0267 14.5006C81.0343 14.5006 80.3932 13.6307 80.387 12.2372V5.29321H77.7611V12.8223C77.7672 15.5861 79.0617 17.2721 80.9665 17.2721C82.3904 17.2721 83.4136 16.3559 83.839 14.9702H83.9376V17.1181H86.4588V5.29321H83.8328V12.0833Z" fill="#FF577F" />
                        <path d="M88.9557 17.1181H91.5446V15.2243H91.6618C92.0255 16.2097 92.8206 17.3105 94.3493 17.3105C96.5068 17.3105 98.1896 15.1781 98.1896 11.221C98.1896 7.15625 96.4328 5.13924 94.3555 5.13924C92.7713 5.13924 92.0131 6.31711 91.6618 7.27942H91.5816V1.35159H88.9557V17.1181ZM91.5261 11.2056C91.5261 9.09626 92.2412 7.74903 93.5172 7.74903C94.8178 7.74903 95.5082 9.15785 95.5082 11.2056C95.5082 13.2688 94.8055 14.7008 93.5172 14.7008C92.2535 14.7008 91.5261 13.315 91.5261 11.2056Z" fill="#FF577F" />
                    </svg>
                    <button onClick={() => logout()}>Sair</button>
                </div>
                <div className={styles.userInfo}>
                <h1 className="titleOne">Olá, {user.name}</h1>
               {
                user.course_module === "FirstModule"? <p className="headline">Primeiro módulo</p>: user.course_module === "SecondModule"?
                <p className="headline">Segundo módulo</p>: <p className="headline">Terceiro módulo</p>
               }
               </div>
            </header>
            <main className={styles.Main}>
               <h1 className="titleOne">Que pena! Estamos em desenvolvimento :(</h1>
               <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </main>
        </>
    )
}