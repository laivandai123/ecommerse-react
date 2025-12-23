import { TfiReload } from 'react-icons/tfi';

import HeaderSideBar from '../components/HeaderSidebar/HeaderSideBar';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <HeaderSideBar
                icon={<TfiReload style={{ fontSize: '24px' }} />}
                title={'compare'}
            />
            <ItemProduct />
        </div>
    );
}

export default Compare;
