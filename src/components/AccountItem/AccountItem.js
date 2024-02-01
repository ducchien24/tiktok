import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ data , className }) {

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper',className)}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name || 'Ngoc'}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name || 'anhngocc0411'}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <span className={cx('username')}>
                    {data.nickname || 'ng đẹp gây thương nhớ'}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
