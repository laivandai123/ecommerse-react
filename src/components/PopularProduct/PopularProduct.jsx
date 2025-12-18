import MainLayout from '../Layout/Layout';
import ProductItem from '../ProductItem/ProductItem';
import styles from './styles.module.scss';

function PopularProduct({ data }) {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                {data &&
                    data.map((item) => (
                        <div className={containerItem}>
                            <ProductItem
                                key={item._id}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                            />
                        </div>
                    ))}
            </div>
        </MainLayout>
    );
}

export default PopularProduct;
