import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './RandomAccount.module.scss';

const cx = classNames.bind(styles);
function CommonLink({ title }) {
    return (
            <Link to={`tag/${title}`}
                className={cx('common-link')}
            >
                <strong>{title}</strong>
            </Link>
    );
}
CommonLink.propTypes = {
    title : PropTypes.string.isRequired,
}
export default CommonLink;
