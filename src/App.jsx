import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/Routers/Routers';
import { Suspense } from 'react';
import SideBar from './components/Sidebar/SideBar';
import { SideBarProvider } from './contexts/Sidebarprovider';
function App() {
    return (
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
    );
}

export default App;
