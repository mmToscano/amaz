import styles from './ProductTypeBtn.module.css';

function ProductTypeBtn({descricao, onClick}) {
    return (
        <div className={styles.btn} onClick={onClick}>{descricao}</div>
    )
}

export default ProductTypeBtn;