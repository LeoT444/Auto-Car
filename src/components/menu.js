import { useState } from "react";
import styles from "./menu.module.css";
import searchIcon from "./images/search.png";
import userIcon from "./images/person.png";
import logo from './images/logo.png'; // Importando a logo

function Menu() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const openRegistration = () => setShowRegistration(true);
    const closeRegistration = () => { setShowRegistration(false); alert("Entrado com sucesso!");}

    return (
        <>
            <header className={styles.navbar}>
                <img src={logo} alt="Logo" className={styles.logo} /> {/* Adicionando a logo */}
                <button className={styles.navButton}>Home</button>
                <button className={styles.navButton}>Veículos</button>
                <img src={searchIcon} alt="Search" className={styles.icon} />
                <div className={styles.userContainer}>
                    <img
                        src={userIcon}
                        alt="User"
                        className={`${styles.icon} ${styles.backgroundIcon}`}
                        onClick={toggleDropdown}
                    />
                    {showDropdown && (
                        <div className={styles.dropdown}>
                            <button>Configuração</button>
                            <button onClick={openRegistration}>Logoff</button>
                        </div>
                    )}
                </div>
            </header>

            {showRegistration && (
                <div className={styles.registrationOverlay}>
                    <div
                        className={styles.registrationModal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Entrar</h2>
                        <form>
                            <label>
                                <p><b>Email:</b></p>
                                <input type="email" name="email" required/>
                            </label>
                            <label>
                                <p><b>Senha:</b></p> 
                                <input type="password" name="password" required/>
                            </label>
                            <button type="submit">Entrar</button>
                        </form><br></br>
                        <a href="/">Esqueci minha senha</a><br></br>
                        Não possui conta? <button onClick={() => window.location.href = '/cadastro'}>Cadastrar</button>
                
                    </div>
                </div>
            )}
        </>
    );
}

export default Menu;