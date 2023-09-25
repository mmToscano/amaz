import styles from './CartModal.module.css';
import { CartContext } from '../contexts/CartContext';
import { useContext, useState } from 'react';

function CartModal({ isVisible, onClose, productData }) {

    const [quantity, setQuantity] = useState(); 

    const {addToCart} = useContext(CartContext);
    
    const handleAddToCart = () => {
        if (productData) {
          const productWithQuantity = {
            ...productData,
            quantity: quantity
          };
          addToCart(productWithQuantity);
          onClose();
        }
      };

    const modalStyle = {
        display: isVisible ? 'flex' : 'none'
    };

    // Check if productData is defined before accessing its properties
    const productImage = productData ? (
        <img src={process.env.PUBLIC_URL + productData.src} alt='nada' />
    ) : null;

    const productName = productData ? productData.nome : '';
    const productPrice = productData ? productData.preco : '';
    const productPromo = productData ? productData.promo : '';

    return (
        <div className={styles.cartModal} style={modalStyle}>
            {productImage}
            <div className={styles.information}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h1>{productName}</h1>
                <h2><s>R$ {productPrice}</s> R$ {productPromo}</h2>
                <input type='number' placeholder='Qtde' onChange={(e) => setQuantity(e.target.value)}/>
                <button onClick={handleAddToCart}>Comprar</button>
            </div>
        </div>
    );
}

export default CartModal;
