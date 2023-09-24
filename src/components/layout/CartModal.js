import styles from './CartModal.module.css'

import defaultImage from '../../img/plants_imgs/carolina_reaper.jpg'

function CartModal({isVisible}){


    const modalStyle = {
        display: isVisible ? 'flex' : 'none'
    }

    return(
        <div className={styles.cartModal} style={modalStyle}>
            <img src={defaultImage}/>
            <div className={styles.information}>
                <span class="close">&times;</span>
                <h1>Carolina Reaper 5 sementes balskdjlrenlaçksdfjlkaanwelrjnlkaçjerl</h1>
                <h2>25 reais por 18</h2>
                <input type='number' placeholder='Qtde'/>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default CartModal;