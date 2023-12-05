import styles from './Product.module.css'

import {useState} from 'react';

function Product ({toggleCartModal, plantData}) {


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleClick = () => {
        toggleCartModal(plantData);
    }



    return(
        <div className={styles.product}
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            onClick={handleClick}>

            {isHovering && (
                <div className={styles.temporaryCart}>
                    <h3 className={styles.comprarBtn}>Comprar</h3>
                </div>
            )}
            <img src={plantData.url}></img>
            <h1>{plantData.nome}</h1>
            <h2>{plantData.subtitulo}</h2>
            <div className={styles.areaDePreco}>
                <h2>R$ {plantData.preco}</h2>
            </div>
        </div>
    )
}

export default Product;