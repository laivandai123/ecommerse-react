import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';
import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import ItemProduct from '../components/ItemProduct/ItemProduct';
function Wishlist() {
    const { container, boxFullBtn, boxItemBtn, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title={'wishlist'}
                />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <button className={boxFullBtn}>VIEW WISHLIST</button>
                <button className={boxItemBtn}>ADD ALL TO CART</button>
            </div>
        </div>
    );
}

export default Wishlist;
