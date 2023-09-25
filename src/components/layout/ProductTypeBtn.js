import styles from './ProductTypeBtn.module.css';

function ProductTypeBtn({descricao}) {
    return (
        <div className={styles.btn}>{descricao}</div>
    )
}

export default ProductTypeBtn;