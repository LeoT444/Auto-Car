import bannerImage from "./images/banner.png";
import car1 from "./images/hb20-comfort.png";
import car2 from "./images/onix-plus.png";
import car3 from "./images/corolla-xei.png";
import car4 from "./images/renegade-longitude.png";
import car5 from "./images/argo-drive.png";
import car6 from "./images/kicks-sv.png";
import car7 from "./images/virtus-highline.png";
import car8 from "./images/creta-prestige.png";

import styles from "./products.module.css"


function Products() {
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
    )
    return(
    <>
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


    </>
    )
    
}

export default Products