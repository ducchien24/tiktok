import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, className, onClick }) {
    const classNames = data.separate
        ? cx(className, 'separator')
        : cx(className);
    return (
        <Button
            className={classNames}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};
export default MenuItem;
