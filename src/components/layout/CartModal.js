import styles from './CartModal.module.css';
import { useState } from 'react';

function CartModal({ isVisible, onClose, productData }) {

    const [quantity, setQuantity] = useState(); 
    
    const handleAddToCart = () => {
        if (productData) {

          const productWithQuantity = {
            ...productData,
            quantidade: Math.floor(quantity)
          }

          delete productWithQuantity.grupoNome;
          delete productWithQuantity.idgrupo;
          delete productWithQuantity.preco_na_promocao;
          delete productWithQuantity.idsemente;

          console.log(JSON.stringify(productWithQuantity));

          fetch("http://3.142.52.247:9000/carrinhos", {
            method: "POST",
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productWithQuantity)
        }).then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

        onClose();
        }
      };

    const modalStyle = {
        display: isVisible ? 'flex' : 'none'
    };

    const productImage = productData ? (
        <img src={productData.url} alt='nada' />
    ) : null;

    const productName = productData ? productData.nome : '';
    const productPrice = productData ? productData.preco : '';

    return (
        <div className={styles.cartModal} style={modalStyle}>
            {productImage}
            <div className={styles.information}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h1>{productName}</h1>
                <h2>R$ {productPrice}</h2>
                <input type='number' placeholder='Qtde' onChange={(e) => setQuantity(e.target.value)}/>
                <button onClick={handleAddToCart}>Comprar</button>
            </div>
        </div>
    );
}

export default CartModal;
