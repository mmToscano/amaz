import styles from './Product.module.css'
import defaultImage from '../../img/plants_imgs/carolina_reaper.jpg'

import {useState} from 'react';

function Product ({toggleCartModal}) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleClick = () => {
        toggleCartModal();
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
            <img src={defaultImage}></img>
            <h1>Carolina Reaper: 5 sementes</h1>
            <h2>(Pimenta mais forte do mundo)</h2>
            <div className={styles.areaDePreco}>
                <h2><s>R$ 33,98</s></h2>
                <h2 className={styles.promo}>R$ 28,99</h2>
            </div>
        </div>
    )
}

export default Product;