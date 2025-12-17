import styles from '../styles.module.scss';

function Menu({ content, href }) {
    const { menu } = styles;

    return (
        <a href={href} className={menu}>
            {content}
        </a>
    );
}

export default Menu;
