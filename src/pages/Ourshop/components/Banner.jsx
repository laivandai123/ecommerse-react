import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
function Banner() {
    const { containerBanner, contentBox, title } = styles;
    const targetDate = '2026-10-21T00:00:00';

    return (
        <div className={containerBanner}>
            <div className={contentBox}>
                <div>
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <div className={title}>This Classics Make A Comeback</div>
                <div style={{ width: '176px' }}>
                    <Button content={'Buy now'} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
