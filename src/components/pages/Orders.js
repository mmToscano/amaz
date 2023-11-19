import Order from '../layout/Order';
import styles from './Orders.module.css'


function Orders(){
    return(
        <div className={styles.orders_container}>
            <Order></Order>
        </div>
       
    )
}

export default Orders;