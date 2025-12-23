import { TfiReload } from 'react-icons/tfi';
import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
function Compare() {
    const { container, boxItem, boxFullBtn } = styles;
    return (
        <div className={container}>
            <div className={boxItem}>
                <HeaderSideBar
                    icon={<TfiReload style={{ fontSize: '24px' }} />}
                    title={'compare'}
                />
                <ItemProduct />
                <ItemProduct />
            </div>
            <button className={boxFullBtn}>VIEW COMPARE</button>
        </div>
    );
}

export default Compare;
