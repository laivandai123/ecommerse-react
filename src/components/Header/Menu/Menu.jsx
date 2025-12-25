import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/Sidebarprovider';
import { StoreContext } from '@/contexts/Storeprovider';

function Menu({ content, href }) {
    const { menu, submenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const handleShowClickLogin = () => {
        if (content === 'Sign In' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }
    };
    const handleRenderText = (content) => {
        if (content === 'Sign In' && userInfo) {
            return `Hello ${userInfo?.username}`;
        } else return content;
    };
    const handleHover = () => {
        if (content === 'Sign In' && userInfo) {
            setIsShowSubMenu(true);
        }
    };
    return (
        <div
            className={menu}
            onMouseEnter={handleHover}
            onClick={handleShowClickLogin}
        >
            {handleRenderText(content)}
            {isShowSubMenu && (
                <div
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    className={submenu}
                    onClick={handleLogout}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
