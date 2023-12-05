import styles from './CartProduct.module.css';

function CartProduct({productData, url, retirarItem}) {

    function removerItemDoCarrinho() {
        fetch("http://3.142.52.247:9000/carrinho/" + productData.idcarrinho, {
            method: "DELETE",
            mode: 'cors'
        })

        retirarItem(productData.idcarrinho);
    }

    
    return(
        <div className={styles.cartProduct_container}>
            <img src={url}/>
            <div className={styles.information_container}>
                <h1>{productData.nome}</h1>
                <h2>{productData.subtitulo}</h2>
                <div className={styles.areaDePreco}>
                    <h2>R$ {productData.preco}</h2>
                </div>
            </div>
                <div className={styles.buy_container}>
                    <input type='number' min="1" defaultValue={productData.quantidade}/>
                    <button onClick={() => removerItemDoCarrinho()}>Remover</button>
                </div>
                
        </div>
    )
}

export default CartProduct;