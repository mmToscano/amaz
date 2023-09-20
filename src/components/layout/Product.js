import styles from './Product.module.css'
import defaultImage from '../../img/plants_imgs/carolina_reaper.jpg'

function Product () {


    return(
        <div className={styles.product}>
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