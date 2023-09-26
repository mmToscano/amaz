import ProductTypeBtn from '../layout/ProductTypeBtn';
import ProductsContainer from '../layout/ProductsContainer';
import styles from './ProductsPage.module.css'

import { useState } from 'react';

import SementesDeArvore from '../../database/SementesDeArvore'
import SementesDeFlores from '../../database/SementesDeFlores'
import SementesDePimenta from '../../database/SementesDePimenta'
import SementesDeTomate from '../../database/SementesDeTomate'

import CartModal from '../layout/CartModal';

function ProductsPage() {

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);

    const toggleCartModal = (productData, productIndex) => {
        setIsCartModalVisible(!isCartModalVisible);
        setSelectedProductIndex(productIndex);
    };

    const productDataMapping = {
        'sementes de pimenta': SementesDePimenta,
        'sementes de flores': SementesDeFlores,
        'sementes de arvore': SementesDeArvore,
        'sementes de tomate': SementesDeTomate
    }

    const [selectedProductType, setSelectedProductType] = useState(null);

    const handleProductTypeSelect = (descricao) => {
        const selectedProductData = productDataMapping[descricao];
        setSelectedProductType(selectedProductData);
      };

    return(
        <div className={styles.productsPage}>
            <div className={styles.btns}>
                <ProductTypeBtn descricao='sementes de pimenta' 
                onClick={() => handleProductTypeSelect('sementes de pimenta')} />
                <ProductTypeBtn descricao='sementes de arvore'
                onClick={() => handleProductTypeSelect('sementes de arvore')} ></ProductTypeBtn>
                <ProductTypeBtn descricao='sementes de flores'
                onClick={() => handleProductTypeSelect('sementes de flores')} ></ProductTypeBtn>
                <ProductTypeBtn descricao='sementes de tomate'
                onClick={() => handleProductTypeSelect('sementes de tomate')} ></ProductTypeBtn> 
            </div>
            {selectedProductType && (
                <ProductsContainer descricao={selectedProductType.descricao} 
                plantsData={selectedProductType} toggleCartModal={toggleCartModal} />
            )}
            {isCartModalVisible && selectedProductIndex !== null && (
                <CartModal 
                    isVisible={isCartModalVisible} 
                    onClose={toggleCartModal} 
                    productData={selectedProductType[selectedProductIndex]}
                />
            )}
               
        </div>
    )
}

export default ProductsPage;