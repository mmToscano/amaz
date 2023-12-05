import styles from './Cart.module.css'
import CartProduct from '../layout/CartProduct';
import React, { useEffect, useState } from 'react';

function Cart() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("http://3.142.52.247:9000/carrinhos", {
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
            const response = await fetch("http://3.142.52.247:9000/pedidos", {
            method: "POST",
            body: JSON.stringify(cart[index]),
            headers: {"Content-Type": "application/json"}
            })
        }
        
        const responseCart = await fetch("http://3.142.52.247:9000/carrinhoTudo", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
        })
        
        setCart([]);
        
    }

    function retirarItem(id) {
        let newCart = cart.filter((item) => item.idcarrinho != id);
        setCart(newCart);
    }

    return (
        <section className={styles.cart_container}>
            {cart.map((productData, index) => (
                <CartProduct key={index} productData={productData} url={productData.url} retirarItem={retirarItem}/>
            ))}
            {cart.length != 0 ?  (
                <button className={styles.btn} onClick={() => comprarTudo()}>Comprar Tudo</button>
            ) : <div className={styles.btn} >Não há nada no carrinho</div>}
        </section>
    )
}

export default Cart;
