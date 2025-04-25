import React from "react";
import bannerImage from "./banner.png";
import car1 from "./hb20-comfort.png";
import car2 from "./onix-plus.png";
import car3 from "./corolla-xei.png";
import car4 from "./renegade-longitude.png";
import car5 from "./argo-drive.png";
import car6 from "./kicks-sv.png";
import car7 from "./virtus-highline.png";
import car8 from "./creta-prestige.png";
import searchIcon from "./search.png";
import carIcon from "./directions-car.png";
import userIcon from "./person.png";
import styles from "./style.module.css";

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <img src={carIcon} alt="Car Icon" className={styles.icon} />
        <button className={styles.navButton}>Home</button>
        <button className={styles.navButton}>Veículos</button>
        <img src={searchIcon} alt="Search" className={styles.icon} />
        <img src={userIcon} alt="User" className={`${styles.icon} ${styles.backgroundIcon}`} />
      </header>

      <img src={bannerImage} alt="Banner" className={styles.banner} />
      <h2>Carros mais populares</h2><br></br>
      <main className={styles.grid}>
        
        <CarCard image={car1} name="HB20 Comfort" brand="Hyundai" price="149.90" />
        <CarCard image={car2} name="Onix Plus LT" brand="Chevrolet" price="159.90" />
        <CarCard image={car3} name="Corolla XEi" brand="Toyota" price="249.90" />
        <CarCard image={car4} name="Renegade Longitude" brand="Jeep" price="229.90" />
        <CarCard image={car5} name="Argo Drive" brand="Fiat" plate="MNO3P45" price="139.90" />
        
        

      </main>
      <hr />
      <h2>Nossos carros</h2>
      <main className={styles.grid}>
      <CarCard image={car6} name="Kicks SV" brand="Nissan" plate="QRS6T78" price="199.90" />
        <CarCard image={car7} name="Virtus Highline" brand="Volkswagen" plate="UVW9X01" price="189.90" />
        <CarCard image={car8} name="Creta Prestige" brand="Hyundai" plate="XYZ2A34" price="219.90" />
        <CarCard image={car1} name="HB20 Comfort" brand="Hyundai" price="149.90" />
        <CarCard image={car2} name="Onix Plus LT" brand="Chevrolet" price="159.90" />
        <CarCard image={car3} name="Corolla XEi" brand="Toyota" price="249.90" />
        <CarCard image={car4} name="Renegade Longitude" brand="Jeep" price="229.90" />
        <CarCard image={car5} name="Argo Drive" brand="Fiat" plate="MNO3P45" price="139.90" />
        <CarCard image={car6} name="Kicks SV" brand="Nissan" plate="QRS6T78" price="199.90" />
        <CarCard image={car7} name="Virtus Highline" brand="Volkswagen" plate="UVW9X01" price="189.90" />
        <CarCard image={car8} name="Creta Prestige" brand="Hyundai" plate="XYZ2A34" price="219.90" />
        <CarCard image={car1} name="HB20 Comfort" brand="Hyundai" price="149.90" />
        <CarCard image={car2} name="Onix Plus LT" brand="Chevrolet" price="159.90" />
        <CarCard image={car3} name="Corolla XEi" brand="Toyota" price="249.90" />
        <CarCard image={car4} name="Renegade Longitude" brand="Jeep" price="229.90" />
      </main>
    </div>
  );
};

const CarCard = ({ image, name, brand, price, plate }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.cardImage} />
    <div className={styles.cardText}>
      <p><strong>Nome:</strong> {name}</p>
      <p><strong>Marca:</strong> {brand}</p>
      {plate && <p><strong>Placa:</strong> {plate}</p>}
      <p><strong>Valor locação:</strong> R$ {price}</p>
    </div>
  </div>
);
export default App