import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart({pegarOrderData}) {

    /*
    function printJson(){
        console.log(JSON.stringify(cart));
    }
    */
    
    const { cart } = useContext(CartContext);

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} />
            ))}
            {cart.length != 0 ?  (
                <button className={styles.btn} onClick={() => pegarOrderData(cart)}>Comprar Tudo</button>
            ) : <div className={styles.btn}>Não há nada no carrinho</div>}
        </section>
    )
}

export default Cart;