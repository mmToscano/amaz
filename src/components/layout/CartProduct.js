import styles from './CartProduct.module.css';

import defaultImage from '../../img/carolina_reaper.jpg'

function CartProduct({productData}) {
    console.log(productData)
    return(
        <div className={styles.cartProduct_container}>
            <img src={defaultImage}/>
            <div className={styles.information_container}>
                <h1>{productData.nome}</h1>
                <h2>{productData.subtitulo}</h2>
                <div className={styles.areaDePreco}>
                    <h2><s>R$ {productData.preco}</s></h2>
                    <h2 className={styles.promo}>R$ {productData.promo}<s></s></h2>
                </div>
            </div>
                <div className={styles.buy_container}>
                    <input type='number' defaultValue={productData.quantity}/>
                    <button>Comprar</button>
                </div>
                
        </div>
    )
}

export default CartProduct;