import MainLayout from '../Layout/Layout';
import styles from './styles.module.scss';
function AdvanceHeading() {
    const { container, headline, containerMiddleBox, des, title } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <div className={des}>don't miss super offers</div>
                    <div className={title}>Our best products</div>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeading;
