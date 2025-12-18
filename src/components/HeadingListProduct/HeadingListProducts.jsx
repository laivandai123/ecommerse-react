import CountdownBanner from '../CountdownBanner/CountdownBanner';
import MainLayout from '../Layout/Layout';
import ProductItem from '../ProductItem/ProductItem';
import styles from './styles.module.scss';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
