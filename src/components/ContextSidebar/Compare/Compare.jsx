import { TfiReload } from 'react-icons/tfi';
import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Compare() {
    const { container, boxItem } = styles;
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
            <Button content={'VIEW COMPARE'} isPrimary={false} />
        </div>
    );
}

export default Compare;
