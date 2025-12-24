import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/Routers/Routers';
import { Suspense } from 'react';
import SideBar from './components/Sidebar/SideBar';
import { SideBarProvider } from './contexts/Sidebarprovider';
import { ToastProvider } from './contexts/Toastprovider';
function App() {
    return (
        <ToastProvider>
            <SideBarProvider>
                <SideBar />
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {routers.map((item, index) => {
                                return (
                                    <Route
                                        path={item.path}
                                        element={<item.component />}
                                        key={index}
                                    />
                                );
                            })}
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </SideBarProvider>
        </ToastProvider>
    );
}

export default App;
