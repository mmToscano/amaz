import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart({pegarOrderData}) {

    const [cart, setCart] = useState([])
    //const { cart, removeAllFromCart } = useContext(CartContext);

    //Pega o carrinho do banco quando abre a página
    useEffect(() => {
        fetch("http://localhost:9000/carrinhos", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then((response) => response.json())
            .then((data) => setCart(data))
    }, [])

    //coloca todos os itens do carrinho nos pedidos e depois elimina tudo o que está no carrinho

    function tratarPedidos(data) {
        for (let index = 0; index < data.length; index++) {
            delete data[index].idcarrinho;
            data.status_do_pedido = "entregue";
            data.data_de_entrega = "2023-11-22";
        }
    }

    async function comprarTudo() {
        tratarPedidos(cart);
        
        for (let index = 0; index < cart.length; index++) {
            const response = await fetch("http://localhost:9000/pedidos", {
            method: "POST",
            body: JSON.stringify(cart[index]),
            headers: {"Content-Type": "application/json"}
            })
        }
        
        const responseCart = await fetch("http://localhost:9000/carrinhoTudo", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
        })
        
        setCart([]);
        
    }

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} />
            ))}
            {cart.length != 0 ?  (
                <button className={styles.btn} onClick={() => comprarTudo()}>Comprar Tudo</button>
            ) : <div className={styles.btn} >Não há nada no carrinho</div>}
        </section>
    )
}

export default Cart;

//pega a informação do cart ao clicar no botão e envia essa informação ao banco de dados (coloca na tabela carrinho do banco)
    //esse fetch aqui acessará o endpoint da API. Nâo é aqui que ocorrerá a conexão com o banco de dados
    //(o front-end não tem acesso direto com o banco, lembra?). O que ocorrerá aqui é que terá uma conexão com a
    //API, e então a API terá a conexão com o banco, bocó de asa
