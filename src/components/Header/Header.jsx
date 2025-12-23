import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.webp';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/Sidebarprovider';

function Header() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        topHeader,
        fixedHeader
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);
    const { setIsOpen, setType } = useContext(SideBarContext);
    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
    };
    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => {
                                return (
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        href={item.href}
                                        setIsOpen={setIsOpen}
                                    />
                                );
                            })}
                    </div>
                    <div className={containerBox}>
                        <TfiReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <CiHeart
                            style={{ fontSize: '26px' }}
                            onClick={() => handleOpenSidebar('wishlist')}
                        />
                        <PiShoppingCartThin
                            style={{ fontSize: '24px' }}
                            onClick={() => handleOpenSidebar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
