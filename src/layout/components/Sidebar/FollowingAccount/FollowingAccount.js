import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import AccountItem from './AccountItem';
import styles from './FollowingAccount.module.scss';

// service
import { getFollowing } from '~/services';

const cx = classNames.bind(styles);

function FollowingAccount({ title }) {
    const [followingUsers, setFollowingUsers] = useState([]);
    const [pageFollowing, setPageFollowing] = useState(1);
    const [isExpanding, setIsExpanding] = useState(false);
    const [hasData, setHasData] = useState(true);

    const listUserRendered = isExpanding || hasData
        ? followingUsers
        : followingUsers.slice(0, 5);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getFollowing({ page: pageFollowing });
            const data = res.data;
            if (data.length < 5) {
                setHasData(false);
                setIsExpanding(true);
            } else {
            }
            setFollowingUsers([...followingUsers, ...data]);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageFollowing]);

    // Handle events
    const handleSeeMore = () => {
        if (!hasData) {
            setIsExpanding(true);
            return;
        }
        setPageFollowing(pageFollowing + 1);
    };
    const handleSeeLess = () => {
        setIsExpanding(false);
    };
    // console.log(followingUsers)
    return (
        <section className={cx('following-accounts')}>
            <div className={cx('title')}>Following accounts</div>
            {listUserRendered.length > 0 &&
                listUserRendered.map((u) => (
                    <AccountItem
                        key={u.id}
                        className={cx('account-item')}
                        data={u}
                    />
                ))}
            {!isExpanding ? (
                <p className={cx('more-btn')} onClick={handleSeeMore}>
                    See more
                </p>
            ) : (
                <p className={cx('more-btn')} onClick={handleSeeLess}>
                    See less
                </p>
            )}
        </section>
    );
}

FollowingAccount.propTypes = {
    title: PropTypes.string.isRequired,
};
export default FollowingAccount;
