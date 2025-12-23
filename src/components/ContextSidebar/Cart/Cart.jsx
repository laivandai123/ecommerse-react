import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { PiShoppingCartThin } from 'react-icons/pi';

import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
function Cart() {
    const { container, boxBtn, boxFullBtn, boxItemBtn, total } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<PiShoppingCartThin style={{ fontSize: '30px' }} />}
                    title={'cart'}
                />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$119.99</p>
                </div>
                <button className={boxFullBtn}>VIEW CART</button>
                <button className={boxItemBtn}>CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;
