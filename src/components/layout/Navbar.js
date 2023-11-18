import {Link} from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/leaf.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            
                <Link to='/'><img className={styles.img} src={logo}/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/products">Produtos</Link></li>
                    <li className={styles.item}><Link to="/cart">Carrrinho</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
           
        </nav>
        
    );
}

export default Navbar;

//<li><Link to="/newproject">Novo projeto</Link></li>