import { useEffect, useState } from 'react';
import AdvanceHeading from '../AdvanceHeadling/AdvanceHeadling';
import Banner from '../Banner/Banner';
import Header from '../Header/header';

import Info from '../Info/Info';
import styles from './styles.module.scss';
import getProduct from '@/apis/productsService';
import PopularProduct from '../PopularProduct/PopularProduct';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';

function Homepage() {
    const [listProducts, setListProducts] = useState([]);
    const { container } = styles;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProduct();
                setListProducts(data.contents || []);
                console.log('data:', data);
                console.log('data.contents:', data.contents);
            } catch (err) {
                console.error('Lỗi khi tải sản phẩm:', err);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts data={listProducts.slice(0, 2)} />
                <PopularProduct data={listProducts.slice(2, 14)} />
            </div>
        </div>
    );
}

export default Homepage;
