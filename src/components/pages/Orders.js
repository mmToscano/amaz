import Order from '../layout/Order';
import styles from './Orders.module.css'


function Orders({orders}){

    return (
        <>
            {orders ? (
                <div className={styles.orders_container}>
                    {orders.map((orderData, index) => (
                <Order productData={orderData}></Order>
            ))}
                </div>
            ): <div className={styles.orders_container}>
                    <div className={styles.sem_pedidos}>Você não possui nenhum pedido feito ainda!</div>
                </div>}
        </>
    )
    
}

export default Orders;

/*
{orders && (
                <div className={styles.orders_container}>
                    {orders.map((orderData, index) => (
                <Order productData={orderData}></Order>
            ))}
                </div>
            )}
*/