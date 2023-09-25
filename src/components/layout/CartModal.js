import styles from './CartModal.module.css';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

function CartModal({ isVisible, onClose, productData }) {
    const {addToCart} = useContext(CartContext);
    
    const handleAddToCart = () => {
        if (productData) {
          addToCart(productData);
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
    const productPrice = productData ? `${productData.preco} por ${productData.promo}` : '';

    return (
        <div className={styles.cartModal} style={modalStyle}>
            {productImage}
            <div className={styles.information}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <h1>{productName}</h1>
                <h2>{productPrice}</h2>
                <input type='number' placeholder='Qtde' />
                <button onClick={handleAddToCart}>Comprar</button>
            </div>
        </div>
    );
}

export default CartModal;
