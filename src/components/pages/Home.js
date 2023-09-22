import styles from './Home.module.css';
import ProductsContainer from '../layout/ProductsContainer';


function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo à loja Amazônia</h1>
            <p>Pegue já a sua planta favorita!</p>
            <ProductsContainer descricao='Mais vistos'></ProductsContainer>
            <ProductsContainer descricao='O que os outros clientes estão vendo'></ProductsContainer>
        </section>
    )
}

export default Home;