import styles from './Product.module.css'
import defaultImage from '../../img/plants_imgs/carolina_reaper.jpg'

import {useState} from 'react';

function Product () {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    }


    return(
        <div className={styles.product} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {isHovering && (
                <div>
                    <h2>Only visible when hovering</h2>
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