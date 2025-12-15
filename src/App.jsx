import Footer from '@components/Footer/Footer';
import Header from '@components/Header/header';
import MainLayout from '@components/Layout/Layout';

function App() {
    return (
        <>
            <MainLayout>
                <Header />
                <div>Content</div>
                <Footer />
            </MainLayout>
        </>
    );
}

export default App;
