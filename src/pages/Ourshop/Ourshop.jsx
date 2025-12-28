import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import Banner from './components/Banner';
import styles from './styles.module.scss';
function Ourshop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();
    const handleBackPreviusPage = () => {
        navigate(-1);
    };
    const targetDate = '2026-02-21T00:00:00';
    return (
        <>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviusPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>
                <Banner />
            </MainLayout>
        </>
    );
}

export default Ourshop;
