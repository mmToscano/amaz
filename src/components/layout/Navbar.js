import {Link} from 'react-router-dom';

import Container from './Container';

import styles from './Navbar.module.css';
import logo from '../../img/leaf.png'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'><img className={styles.img} src={logo}/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Produtos</Link></li>
                    <li className={styles.item}><Link to="/company">Carrrinho</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
            </Container>
        </nav>
        
    );
}

export default Navbar;

//<li><Link to="/newproject">Novo projeto</Link></li>