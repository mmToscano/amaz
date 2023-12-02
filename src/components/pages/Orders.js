import Order from '../layout/Order';
import styles from './Orders.module.css'

import {useState, useEffect} from 'react';


function Orders(){

    const [orders, setOrders] = useState([]);

    //quando abrir a página, é feito um fetch na api para pegar os pedidos
    useEffect(() => {
        const response = fetch("http://3.23.59.132:9000/pedidos", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
        }).then((response) => response.json())
        .then((data) => setOrders(data))
    }, [])

    

    return (
        <>
            {orders.length != 0 ? (
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