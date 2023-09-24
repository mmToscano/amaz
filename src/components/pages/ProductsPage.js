import ProductTypeBtn from '../layout/ProductTypeBtn';
import styles from './ProductsPage.module.css'

function ProductsPage() {
    return(
        <div className={styles.productsPage}>
            <ProductTypeBtn descricao='semente de pimenta'></ProductTypeBtn>
            <ProductTypeBtn descricao='semente árvore'></ProductTypeBtn>
        </div>
    )
}

export default ProductsPage;