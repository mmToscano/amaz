import Product from './Product';
import styles from './ProductsContainer.module.css'

function ProductsContainer ({descricao}) {
    return(
        <div className={styles.productsContainer}>
            <h1>{descricao}</h1>
            <ul>
                <li><Product></Product></li>
                <li><Product></Product></li>
                <li><Product></Product></li>
                <li><Product></Product></li>
            </ul>
        </div>
    )
}

export default ProductsContainer;