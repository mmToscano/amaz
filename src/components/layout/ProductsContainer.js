import Product from './Product';
import styles from './ProductsContainer.module.css';

function ProductsContainer ({descricao, toggleCartModal, plantsData}) {

    return(
        <div className={styles.productsContainer}>
            <h1 className={styles.descricao}>{descricao}</h1>
            <ul>
              {plantsData.map((plant, index) => (
                <li key={index}>
                  <Product plantData={plant} toggleCartModal={() => toggleCartModal(plant, index)} />
                </li>
              ))}
      </ul>
        </div>
    ) 
}

export default ProductsContainer;

//<Product plantData={plant} toggleCartModal={toggleCartModal} />