import styles from './Home.module.css';

import React, { useState, useEffect } from 'react';

import ProductsContainer from '../layout/ProductsContainer';
import CartModal from '../layout/CartModal';


function Home(){

    const [frutas, setFrutas] = useState([]);
    const [arvores, setArvores] = useState([]);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [productData, setProductData] = useState("");

    //Pega as informações das plantas quando a página é aberta
    useEffect(() => {
        fetch("http://localhost:9000/gruposESementes", {
            method: "GET",
            mode: 'cors'
        }).then((response) => response.json())
        .then((data) => organizarSementes(data))

        
    }, [])

    const organizarSementes = (data) => {
        let newArvores = data.filter((x) => x.idgrupo === 2);
        let newFrutas = data.filter((x) => x.idgrupo === 5);
        setArvores(newArvores);
        setFrutas(newFrutas);
    }


    const toggleCartModal = (productData) => {
        setProductData(productData);
        setIsCartModalVisible(!isCartModalVisible);
    }


    return(
    <section className={styles.home_container}>
        <CartModal isVisible={isCartModalVisible} onClose={toggleCartModal} productData={productData}></CartModal>
        <div className={styles.titles_container}>
            <h1>Bem vindo à loja Amazônia</h1>
            <p>Pegue já a sua planta favorita!</p>
        </div>
        <div>
            <ProductsContainer plantsData={arvores} descricao='Arvores' toggleCartModal={toggleCartModal}></ProductsContainer>
            <ProductsContainer plantsData={frutas} descricao='Frutas' toggleCartModal={toggleCartModal}></ProductsContainer>
        </div>
    </section>
        
        
    )
}

export default Home;