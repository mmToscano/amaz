import styles from './Home.module.css';

import React, { useState, useRef, useEffect } from 'react';

import ProductsContainer from '../layout/ProductsContainer';
import CartModal from '../layout/CartModal';

import plantsData from '../../database/plantsData';


function Home(){

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [productData, setProductData] = useState("");

    const toggleCartModal = (productData) => {
        setProductData(productData);
        setIsCartModalVisible(!isCartModalVisible);
    }


    return(
        <section className={styles.home_container}>
            <CartModal isVisible={isCartModalVisible} onClose={toggleCartModal} productData={productData}></CartModal>
            <h1>Bem vindo à loja Amazônia</h1>
            <p>Pegue já a sua planta favorita!</p>
            <ProductsContainer plantsData={plantsData} descricao='Mais vistos' toggleCartModal={toggleCartModal}></ProductsContainer>
            <ProductsContainer plantsData={plantsData} descricao='O que os outros clientes estão vendo' toggleCartModal={toggleCartModal}></ProductsContainer>
        </section>
    )
}

export default Home;