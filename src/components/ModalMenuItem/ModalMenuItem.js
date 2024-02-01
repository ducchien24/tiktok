import classNames from 'classnames/bind';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import {
    MenuLoginForm,
    MenuRegisterForm,
} from '~/components/AuthForms/MenuForms';

import LoginForm from '~/components/AuthForms/LoginForm';
import LogoutForm from '../AuthForms/LogoutForm/LogoutForm';

import { ModalContext } from '../ModalProvider';

import styles from './ModalMenuItem.module.scss';

const cx = classNames.bind(styles);

function ModalMenuItem() {
    const { typeForm, relateForm, setTypeForm, handleCloseModal } =
        useContext(ModalContext);

    const loginList = typeForm === 'login-list';
    const loginForm = typeForm === 'login-form';
    const registerList = typeForm === 'register-list';
    const registerForm = typeForm === 'register-form';

    const isLoginRegister = relateForm === 'login-register';
    const isLogout = relateForm === 'logout';
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('overlay')}
                onClick={(e) => handleCloseModal(e)}
            ></div>

            <div className={cx('modal-content')}>
                {isLoginRegister && (
                    <>
                        {loginForm && (
                            <>
                                <span
                                    className={cx('back-btn')}
                                    onClick={() => setTypeForm('login-list')}
                                >
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        className={cx('fa-chevron')}
                                    />
                                </span>
                                <LoginForm />
                            </>
                        )}

                        {loginList && <MenuLoginForm />}
                        {registerList && <MenuRegisterForm />}

                        <div className={cx('footer')}>
                            {loginList && (
                                <div className={cx('modal-agreement')}>
                                    <p>
                                        By continuing, you agree to TikTok’s{' '}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.tiktok.com/legal/terms-of-use?lang=en"
                                            className={cx('modal-link')}
                                        >
                                            Terms of Service
                                        </a>{' '}
                                        and confirm that you have read TikTok’s{' '}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.tiktok.com/legal/privacy-policy?lang=en"
                                            className={cx('modal-link')}
                                        >
                                            Privacy Policy
                                        </a>
                                        .
                                    </p>
                                </div>
                            )}
                            <div className={cx('modal-footer')}>
                                {(loginList || loginForm) && (
                                    <>
                                        <p>Don't have an account?</p>
                                        <span
                                            className={cx('sign-up')}
                                            onClick={() =>
                                                setTypeForm('register-list')
                                            }
                                        >
                                            Sign up
                                        </span>
                                    </>
                                )}
                                {(registerList || registerForm) && (
                                    <>
                                        <p>Already have an account?</p>
                                        <span
                                            className={cx('sign-up')}
                                            onClick={() =>
                                                setTypeForm('login-list')
                                            }
                                        >
                                            Log in
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
                {isLogout && <LogoutForm/>}
            </div>
        </div>
    );
}

export default ModalMenuItem;
