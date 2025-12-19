import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/Sidebarprovider';
import classNames from 'classnames';
import { GrClose } from 'react-icons/gr';
function SideBar() {
    const { container, overlay, sideBar, slideSidebar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
            <div
                className={classNames(sideBar, {
                    [slideSidebar]: isOpen
                })}
            >
                {isOpen && (
                    <div
                        className={boxIcon}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <GrClose />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBar;
