import Product from './Product';
import styles from './ProductsContainer.module.css';

function ProductsContainer ({descricao, toggleCartModal, plantsData}) {

    return(
        <div className={styles.productsContainer}>
            <h1 className={styles.descricao}>{descricao}</h1>
            <ul>
                <li><Product plantData={plantsData[0]} toggleCartModal={() => toggleCartModal(plantsData[0])}></Product></li>
                <li><Product plantData={plantsData[1]} toggleCartModal={() => toggleCartModal(plantsData[1])}></Product></li>
                <li><Product plantData={plantsData[2]} toggleCartModal={() => toggleCartModal(plantsData[2])}></Product></li>
                <li><Product plantData={plantsData[3]} toggleCartModal={() => toggleCartModal(plantsData[3])}></Product></li>
            </ul>
        </div>
    )
}

export default ProductsContainer;