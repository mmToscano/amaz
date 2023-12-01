import styles from './CartProduct.module.css';

import defaultImage from '../../img/carolina_reaper.jpg'

function CartProduct({productData, retirarItem}) {

    function removerItemDoCarrinho() {
        fetch("http://3.19.232.197:9000/carrinho/" + productData.idcarrinho, {
            method: "DELETE",
            mode: 'cors'
        })

        retirarItem(productData.idcarrinho);
    }

    
    return(
        <div className={styles.cartProduct_container}>
            <img src={defaultImage}/>
            <div className={styles.information_container}>
                <h1>{productData.nome}</h1>
                <h2>{productData.subtitulo}</h2>
                <div className={styles.areaDePreco}>
                    <h2><s>R$ {productData.preco}</s></h2>
                </div>
            </div>
                <div className={styles.buy_container}>
                    <input type='number' defaultValue={productData.quantidade}/>
                    <button onClick={() => removerItemDoCarrinho()}>Remover</button>
                </div>
                
        </div>
    )
}

export default CartProduct;