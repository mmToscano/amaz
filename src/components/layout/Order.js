import styles from "./Order.module.css"

function Order({productData}) {
    return (
        <>
        {productData &&
            <div className={styles.order_container}>
            <div className={styles.order_status}>
                <h1>Pedido enviado</h1>
                <h1>Data de entrega: 19/12/2023</h1>
            </div>
            <div className={styles.product_info}>
                <img src={productData.url}/>
                <div className={styles.titles}>
                    <h1>{productData.nome}</h1>
                    <p><strong>Quantidade: {productData.quantidade}</strong></p>
                    <p className={styles.price}>Valor total: R${(productData.quantidade * productData.preco).toFixed(2)}</p>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Order;