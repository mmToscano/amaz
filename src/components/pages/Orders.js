import Order from '../layout/Order';
import styles from './Orders.module.css'

import {useState, useEffect} from 'react';


function Orders({ordersData}){

    const [orders, setOrders] = useState([]);

    //quando abrir a página Orders, é feito um fetch na api para pegar todos os pedidos
    useEffect(() => {
        const response = fetch("http://localhost:9000/pedidos", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
        }).then((response) => response.json())
        .then((data) => setOrders(data))
    }, [])

    

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

primeira:

function Orders({ordersData}){

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(orders.concat(ordersData))
        
    }, [ordersData])

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

segunda:

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

*/