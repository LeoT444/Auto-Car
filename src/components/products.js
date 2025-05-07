import React, { useState, useEffect } from 'react';
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Heurística de prevenção de erro:Carro sem imagem,nome,marca,ou preço
    const CarCard = ({ image, name, brand, price, plate }) => (
        <div className={styles.card}>
            {image ? (
                <img src={image} alt={name} className={styles.cardImage} />
            ) : (
                <div className={styles.cardImage}>Imagem indisponível</div>
            )}
            <div className={styles.cardText}>
                <p><strong>Nome:</strong> {name || "Não informado"}</p>
                <p><strong>Marca:</strong> {brand || "Não informado"}</p>
                {plate && <p><strong>Placa:</strong> {plate}</p>}
                <p><strong>Valor locação:</strong> R$ {price || "0.00"}</p>
            </div>
        </div>
    );

    // Heurística de status do sistema:Carregando - 1-visibilidade do status do sistema
    if (loading) {
        return <div className={styles.loading}>Carregando...</div>; // Adiciona classe para estilização
    }

    return (
        <div>
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
                {/* Heurística de 5-prevenção de erro:Carro sem imagem,nome,marca,ou preço */}
                <CarCard image={null} name="" brand="" price="" />
                <CarCard image={null} name="" brand="" price="" />
                <CarCard image={null} name="" brand="" price="" />
                <CarCard image={null} name="" brand="" price="" />
            </main>
        </div>
    );
}

export default Products;