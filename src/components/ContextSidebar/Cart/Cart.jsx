import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import { PiShoppingCartThin } from 'react-icons/pi';

import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Cart() {
    const { container, boxBtn, total } = styles;
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
                <Button content={'VIEW CART'} />
                <Button content={'CHECKOUT'} isPrimary={false} />
            </div>
        </div>
    );
}

export default Cart;
