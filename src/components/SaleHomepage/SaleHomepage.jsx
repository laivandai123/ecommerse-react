import useTranslateXImage from '@/hooks/useTranslateXImage';
import Button from '../Button/Button';
import styles from './styles.module.scss';
function SaleHomepage() {
    const { container, containerItem, title, des, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: ' transform 1.5s ease'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div className={containerItem}>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <Button content={'Read more'} isPrimary={false} />
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: ' transform 1.5s ease'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
