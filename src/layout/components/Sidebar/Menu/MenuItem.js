import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon, activeIcon, to, title }) {
    return (
        <NavLink
            className={({ isActive }) => {
                return cx('menu-item', { active: isActive });
            }}
            to={to}
        >
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default MenuItem;
