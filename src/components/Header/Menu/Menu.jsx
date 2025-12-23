import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/Sidebarprovider';

function Menu({ content, href }) {
    const { menu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const handleShowClickLogin = () => {
        if (content === 'Sign In') {
            setIsOpen(true);
            setType('login');
        }
    };
    return (
        <a href={href} className={menu} onClick={() => handleShowClickLogin()}>
            {content}
        </a>
    );
}

export default Menu;
