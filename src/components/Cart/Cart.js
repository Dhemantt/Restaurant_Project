import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{
                id: 'm2',
                name: 'Schnitzel',
                amount: 10,
                price: 16.5
            }].map((item) =>
            (
                <li>{item.name}</li>)
            )}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>close</button>
                <button className={classes.button}>Place Order</button>
            </div>
        </Modal>
    )
}

export default Cart;