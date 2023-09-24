import styles from './Home.module.css';

import React, { useState, useRef, useEffect } from 'react';

import ProductsContainer from '../layout/ProductsContainer';
import CartModal from '../layout/CartModal';


function Home(){

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);

    const toggleCartModal = () => {
        setIsCartModalVisible(!isCartModalVisible);
    }


    return(
        <section className={styles.home_container}>
            <CartModal isVisible={isCartModalVisible}></CartModal>
            <h1>Bem vindo à loja Amazônia</h1>
            <p>Pegue já a sua planta favorita!</p>
            <ProductsContainer descricao='Mais vistos' toggleCartModal={toggleCartModal}></ProductsContainer>
            <ProductsContainer descricao='O que os outros clientes estão vendo' toggleCartModal={toggleCartModal}></ProductsContainer>
        </section>
    )
}

export default Home;