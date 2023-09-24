import Product from './Product';
import styles from './ProductsContainer.module.css';

function ProductsContainer ({descricao, toggleCartModal}) {
    return(
        <div className={styles.productsContainer}>
            <h1 className={styles.descricao}>{descricao}</h1>
            <ul>
                <li><Product toggleCartModal={toggleCartModal}></Product></li>
                <li><Product toggleCartModal={toggleCartModal}></Product></li>
                <li><Product toggleCartModal={toggleCartModal}></Product></li>
                <li><Product toggleCartModal={toggleCartModal}></Product></li>
            </ul>
        </div>
    )
}

export default ProductsContainer;