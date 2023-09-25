import ProductTypeBtn from '../layout/ProductTypeBtn';
import styles from './ProductsPage.module.css'

function ProductsPage() {
    return(
        <div className={styles.productsPage}>
            <div className={styles.btns}>
                <ProductTypeBtn descricao='semente de pimenta'></ProductTypeBtn>
                <ProductTypeBtn descricao='semente de árvore'></ProductTypeBtn>
                <ProductTypeBtn descricao='semente de flores'></ProductTypeBtn>
                <ProductTypeBtn descricao='semente de tomates'></ProductTypeBtn> 
            </div>
               
        </div>
    )
}

export default ProductsPage;