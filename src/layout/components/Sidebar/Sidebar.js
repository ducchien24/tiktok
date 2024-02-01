import classNames from 'classnames/bind';
import { useContext } from 'react';

import Footer from './Footer';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import FollowingAccount from './FollowingAccount';

import { routes } from '~/configs';
import { LoginContext } from '~/components/LoginProvider/LoginProvider';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const userCurrent = useContext(LoginContext).data;
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={routes.root}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>

            {/* Following Accounts */}
            {userCurrent && <FollowingAccount title={'Following accounts'} />}

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Sidebar;
