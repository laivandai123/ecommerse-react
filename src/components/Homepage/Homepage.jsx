import AdvanceHeading from '../AdvanceHeadling/AdvanceHeadling';
import Banner from '../Banner/Banner';
import Header from '../Header/header';
import HeadingListProducts from '../HeadingListProduct/HeadingListProducts';
import Info from '../Info/Info';
import styles from './styles.module.scss';

function Homepage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProducts />
            </div>
        </div>
    );
}

export default Homepage;
