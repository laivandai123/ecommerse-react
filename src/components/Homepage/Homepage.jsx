import Banner from '../Banner/Banner';
import Header from '../Header/header';
import styles from './styles.module.scss';

function Homepage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
            </div>
        </div>
    );
}

export default Homepage;
