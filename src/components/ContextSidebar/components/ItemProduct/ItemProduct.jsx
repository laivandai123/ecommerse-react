import styles from './styles.module.scss';
import { GrClose } from 'react-icons/gr';

function ItemProduct() {
    const { container, boxItem, title, price, boxClose } = styles;
    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
                alt=''
            />
            <div className={boxClose}>
                <GrClose style={{ fontSize: '13px', color: '#9c9999ff' }} />
            </div>
            <div className={boxItem}>
                <div className={title}>title</div>
                <div className={price}>$119.99</div>
            </div>
        </div>
    );
}

export default ItemProduct;
