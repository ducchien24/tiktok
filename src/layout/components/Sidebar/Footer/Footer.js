import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

// import { IconEffect } from "~/components/Icons";

import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <a
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v2&utm_source=tiktok_webapp_main"
                className={cx('banner')}
                target="blank"
            >
                <img
                    className={cx('img-banner')}
                    src={images.sidebar_footer}
                    alt="banner"
                />
                <div className={cx('content')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
                    <h4 className={cx('text')}>Tạo hiệu ứng</h4>
                </div>
            </a>

            {/* Link-cointer footer */}

            <section className={cx('link-container')}>
                <a
                    href="https://www.tiktok.com/about?lang=vi-VN"
                    className={cx('link-item')}
                    target="blank"
                >
                    About
                </a>
                <a
                    href="https://newsroom.tiktok.com/en-us/"
                    className={cx('link-item')}
                    target="blank"
                >
                    Newsroom
                </a>
                <a
                    href="https://www.tiktok.com/about/contact?lang=vi-VN"
                    className={cx('link-item')}
                    target="blank"
                >
                    Contact
                </a>
                <a
                    href="https://careers.tiktok.com/"
                    className={cx('link-item')}
                    target="blank"
                >
                    Careers
                </a>
            </section>

            <section className={cx('link-container')}>
                <a
                    href="https://www.tiktok.com/for-good/"
                    className={cx('link-item')}
                    target="blank"
                >
                    TikTok for good
                </a>
                <a
                    href="https://www.tiktok.com/business/vi?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1"
                    className={cx('link-item')}
                    target="blank"
                >
                    Advertise
                </a>
                <a
                    href="https://developers.tiktok.com/?refer=tiktok_web"
                    className={cx('link-item')}
                    target="blank"
                >
                    Developers
                </a>
                <a
                    href="https://www.tiktok.com/transparency/vi-vn"
                    className={cx('link-item')}
                    target="blank"
                >
                    Transparency
                </a>
                <a
                    href="https://www.tiktok.com/tiktok-rewards/eligibility"
                    className={cx('link-item')}
                    target="blank"
                >
                    TikTok rewards
                </a>
                <a
                    href="https://www.tiktok.com/embed"
                    className={cx('link-item')}
                    target="blank"
                >
                    Tiktok embeds
                </a>
            </section>

            <section className={cx('link-container')}>
                <a
                    href="https://support.tiktok.com/vi"
                    className={cx('link-item')}
                    target="blank"
                >
                    Help               
                </a>
                <a
                    href="https://www.tiktok.com/safety/en"
                    className={cx('link-item')}
                    target="blank"
                >
                    Safety        
                </a>
                <a
                    href="https://www.tiktok.com/legal/page/row/terms-of-service/vi"
                    className={cx('link-item')}
                    target="blank"
                >
                    Terms
                </a>
                <a
                    href="https://www.tiktok.com/legal/page/row/privacy-policy/vi"
                    className={cx('link-item')}
                    target="blank"
                >
                    Privacy
                </a>
                <a
                    href="https://www.tiktok.com/creators/creator-portal/en-us"
                    className={cx('link-item')}
                    target="blank"
                >
                    Creator Portal
                </a>
                <a
                    href="https://www.tiktok.com/community-guidelines/vi-vn"
                    className={cx('link-item')}
                    target="blank"
                >
                    Community Guidelines
                </a>
            </section>

            <p className={cx('footer-bottom')}>© 2023 TikTok</p>
        </footer>
    );
}

export default Footer;
