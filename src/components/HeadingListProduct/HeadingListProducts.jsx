import CountdownBanner from '../CountdownBanner/CountdownBanner';
import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';

function HeadingListProducts() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountdownBanner />
                <div className={containerItem}>
                    <div>test 1</div>
                    <div> test 2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
