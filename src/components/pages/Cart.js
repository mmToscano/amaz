import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart({pegarOrderData}) {

    //Pega o carrinho do banco quando abre a página
    useEffect(() => {
        fetch("urlDaApi", {
            method: "GET",
            headers: "Content-Type: application/json"
        })
    }, [])

    const { cart, removeAllFromCart } = useContext(CartContext);

    //pega a informação do cart ao clicar no botão e envia essa informação ao banco de dados (coloca na tabela carrinho do banco)
    //esse fetch aqui acessará o endpoint da API. Nâo é aqui que ocorrerá a conexão com o banco de dados
    //(o front-end não tem acesso direto com o banco, lembra?). O que ocorrerá aqui é que terá uma conexão com a
    //API, e então a API terá a conexão com o banco, bocó de asa
    async function comprar() {
        try {
            const response = await fetch("urlDaApi", {
                method: "POST",
                body: JSON.stringify(cart),
                headers: {"Content-Type": "application/json"}
            })
            console.log(response);
        }catch (error) {
            console.log(error);
        }
        
    }

    async function comprarTudo() {
        await comprar();
        removeAllFromCart();
    }

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} />
            ))}
            {cart.length != 0 ?  (
                <button className={styles.btn} onClick={() => comprarTudo()}>Comprar Tudo</button>
            ) : <div className={styles.btn}>Não há nada no carrinho</div>}
        </section>
    )
}

export default Cart;
