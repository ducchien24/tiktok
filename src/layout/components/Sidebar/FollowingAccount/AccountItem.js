import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

import styles from './FollowingAccount.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ className, data }) {
    const fullName = data['first_name'] + ' ' + data['last_name']
    return (
        <Link to={`/${data.nickname}`} className={cx('account-item', className)}>
            <Image
                src={data.avatar}
                alt={data.nickname}
                className={cx('account-avt')}
            />
            <div className={cx('account-info')}>
                <h4 className={cx('full-name')}>
                    {data.nickname}
                    <span className={cx('account-tick')}>
                        {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                    </span>
                </h4>
                <p className={cx('nick-name')}>{fullName}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.object.isRequired,
};
export default AccountItem;
