import styles from "./menu.module.css"
import carIcon from "./images/directions-car.png"
import searchIcon from "./images/search.png"
import userIcon from "./images/person.png"

function Menu() {
    return (
        <header className={styles.navbar}>
            <img src={carIcon} alt="Car Icon" className={styles.icon} />
            <button className={styles.navButton}>Home</button>
            <button className={styles.navButton}>Veículos</button>
            <img src={searchIcon} alt="Search" className={styles.icon} />
            <img src={userIcon} alt="User" className={`${styles.icon} ${styles.backgroundIcon}`} />
        </header>
    )
}

export default Menu