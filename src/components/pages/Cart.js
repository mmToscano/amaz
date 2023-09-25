import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {

    function printJson(){
        console.log(cart);
    }

    const { cart } = useContext(CartContext);

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} />
            ))}
            <button className={styles.btn} onClick={printJson}>Comprar Tudo</button>
        </section>
    )
}

export default Cart;