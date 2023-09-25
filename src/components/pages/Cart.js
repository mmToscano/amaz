import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {

    const { cart } = useContext(CartContext);

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} />
            ))}
        </section>
    )
}

export default Cart;