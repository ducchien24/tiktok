import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons';

import CommonLink from './CommonLink';
import Image from '~/components/Image';
import Button from '~/components/Button';
import VideoItem from '~/components/VideoItem';

// services
import { followAction,unfollowAction } from '~/services';

import styles from './RandomAccount.module.scss';

const cx = classNames.bind(styles);

function AccountItem({data}) {
    // console.log(data)
    const [isFollowed,setIsFollowed] = useState(data.is_followed)
    const musicAuthor = data.popular_video.music;
    const videoDesc = data.popular_video.description;
    // const followed = data.is_followed;
    // console.log(isFollowed)
    const tokenAuth = localStorage.getItem('token');

    // handle api
    const handleFollowAnUser = async (id) => {
        // console.log(tokenAuth)
        if(tokenAuth){
            const res = await followAction(id);
            // console.log(res)
            setIsFollowed(res.is_followed);
        }else {
            alert(`Sign in to use this feature! `)
        }
    }

    const handleUnFollowAnUser = async (id) => {
        if(tokenAuth){
            const res = await unfollowAction(id);
            setIsFollowed(res.is_followed);
        }else {
            alert(`Sign in to use this feature! `)
        }
    }
    return (
        <div className={cx('account-item')}>
            <Link to={`/${data.nickname}`} className={cx('account-avt')}>
                <Image
                    // src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b83015f34e14ce7735c2d8c3bda97755~c5_100x100.jpeg?x-expires=1699668000&x-signature=eyOnkPA%2FODpy2lU3DYhMW8mjTOk%3D"
                    src={data.avatar}
                    alt={data.nickname}
                />
            </Link>
            <div className={cx('content')}>
                <div className={cx('header-content')}>
                    <div className={cx('account-info')}>
                        <div>
                            <Link className={cx('author-text')}>
                                <h3 className={cx('nick-name')}>
                                   {data.nickname}
                                </h3>
                                <h4 className={cx('full-name')}>
                                    {`${data.first_name} ${data.last_name}`}
                                </h4>
                            </Link>
                        </div>
                        {/* Description */}
                        {videoDesc &&  <div className={cx('video-desc')}>{ videoDesc}</div>}
                        {/*  */}
                        <div className={cx('style-links')}>
                            <CommonLink title="#foodie" />
                            <CommonLink title="#foodies" />
                            <CommonLink title="#foodietokph" />
                            <CommonLink title="#foodieph" />
                            <CommonLink title="#foodietiktok" />
                            <CommonLink title="#foodietok" />
                        </div>
                        <Link
                            to={`music/original-sound-7290399805107489566`}
                            className={cx('music-wrapper')}
                        >
                            <FontAwesomeIcon
                                icon={faMusic}
                                className={cx('music-icon', 'icon')}
                            />
                            <p className={cx('music-text')}>
                                {musicAuthor || 'original-sound'}
                            </p>
                        </Link>
                        <Link
                            to={`place/Sphere-Event-venue-22535865216393649`}
                            className={cx('anchor-wrapper')}
                        >
                            <FontAwesomeIcon
                                icon={faAnchor}
                                className={cx('anchor-icon', 'icon')}
                            />
                            <p className={cx('anchor-text')}>
                                Sphere Event venue · Las Vegas
                            </p>
                        </Link>
                    </div>
                    {
                        !isFollowed ? 
                            <Button outline onClick={() => handleFollowAnUser(data.id)}>Follow</Button>
                            :
                            <Button outlineDark onClick={() => handleUnFollowAnUser(data.id)}>Following</Button>
                    }
                </div>

                {/* Video Item */}
                <VideoItem data={data.popular_video.file_url}/>
                
            </div>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
