import Button from '../Button/Button';
import styles from './styles.module.scss';
function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <p className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </p>
                <div style={{ width: '176px' }}>
                    <Button content={'Go to shop'} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
