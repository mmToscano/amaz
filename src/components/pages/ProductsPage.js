import ProductTypeBtn from '../layout/ProductTypeBtn';
import ProductsContainer from '../layout/ProductsContainer';
import styles from './ProductsPage.module.css'

import { useState, useEffect } from 'react';

import CartModal from '../layout/CartModal';

function ProductsPage() {

    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);
    const [selectedProductType, setSelectedProductType] = useState(null);

    const [sementesDeArvore, setSementesDeArvore] = useState([]);
    const [sementesDeFlores, setSementesDeFlores] = useState([]);
    const [sementesDeAbobora, setSementesDeAbobora] = useState([]);
    const [sementesDePimenta, setSementesDePimenta] = useState([]);
    const [sementesDeFrutas, setSementesDeFrutas] = useState([]);

    

    useEffect(() => {
        fetch("http://3.23.59.132:9000/gruposESementes", {
            method: "GET",
            mode: 'cors'
        }).then((response) => response.json())
        .then((data) => organizarSementes(data))
    }, [])

    const organizarSementes = (data) => {
        let newPimentas = data.filter((x) => x.idgrupo == 1);
        let newArvores = data.filter((x) => x.idgrupo == 2);
        let newAboboras = data.filter((x) => x.idgrupo == 3);
        let newFlores = data.filter((x) => x.idgrupo == 4);
        let newFrutas = data.filter((x) => x.idgrupo == 5);
        
        setSementesDePimenta(newPimentas);
        setSementesDeArvore(newArvores);
        setSementesDeAbobora(newAboboras);
        setSementesDeFlores(newFlores);
        setSementesDeFrutas(newFrutas);
    }

    

    const toggleCartModal = (productData, productIndex) => {
        setIsCartModalVisible(!isCartModalVisible);
        setSelectedProductIndex(productIndex);
    };

    const productDataMapping = {
        'sementes de pimenta': sementesDePimenta,
        'sementes de flores': sementesDeFlores,
        'sementes de arvore': sementesDeArvore,
        'sementes de frutas': sementesDeFrutas,
        'sementes de abobora': sementesDeAbobora
    }

    

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
                onClick={() => handleProductTypeSelect('sementes de arvore')} />
                <ProductTypeBtn descricao='sementes de abobora'
                onClick={() => handleProductTypeSelect('sementes de abobora')} />
                <ProductTypeBtn descricao='sementes de flores'
                onClick={() => handleProductTypeSelect('sementes de flores')} /> 
                <ProductTypeBtn descricao='sementes de frutas'
                onClick={() => handleProductTypeSelect('sementes de frutas')} /> 
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