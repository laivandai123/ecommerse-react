import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/Sidebarprovider';
import classNames from 'classnames';
import { GrClose } from 'react-icons/gr';
import Login from '../ContextSidebar/Login/Login';
import Compare from '../ContextSidebar/Compare/Compare';
import Wistlist from '../ContextSidebar/WishList/Wistlist';
import Cart from '../ContextSidebar/Cart/Cart';
function SideBar() {
    const { container, overlay, sideBar, slideSidebar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);
    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return <Wistlist />;
            case 'cart':
                return <Cart />;
            default:
                return <Login />;
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={() => handleToggle()}
            />
            <div
                className={classNames(sideBar, {
                    [slideSidebar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={() => handleToggle()}>
                        <GrClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
