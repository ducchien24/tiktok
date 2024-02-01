import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../Layout';
import Button from '~/components/Button';
import { HidePassWordIcon, ShowPassWordIcon } from '~/components/Icons';

import { LoginContext } from '~/components/LoginProvider/LoginProvider';

import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [isShowPassWord, setIsShowPassWord] = useState(false);

    const { isError,isLoading, fetchApi } = useContext(LoginContext);

    const handleEnterCharacters = (e, f) => {
        const value = e.target.value;
        // Prevent behaviour when the user enters a space
        if (!value.startsWith(' ')) f(value);
    };
    useEffect(() => {
        if (email && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchApi(email, password);
    };
    return (
        <Layout>
            <h2 className={cx('title')}>Log in</h2>
            <div className={cx('content')}>
                <form className={cx('form')}>
                    {isLoading && (
                        <span className={cx('spinner-icon')}>
                            <FontAwesomeIcon
                                icon={faSpinner}
                            ></FontAwesomeIcon>
                        </span>
                    )}

                    <div className={cx('form-header')}>
                        <label htmlFor="email">Email or username</label>
                        <span className={cx('target-link')}>
                            Log in with phone
                        </span>
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-input')}
                            placeholder="Email or username"
                            id="email"
                            value={email}
                            onChange={(e) => handleEnterCharacters(e, setEmail)}
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            className={cx('form-input')}
                            type={isShowPassWord ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                handleEnterCharacters(e, setPassword)
                            }
                        />
                        <span
                            className={cx('show-pass')}
                            onClick={() => setIsShowPassWord(!isShowPassWord)}
                        >
                            {isShowPassWord ? (
                                <ShowPassWordIcon />
                            ) : (
                                <HidePassWordIcon />
                            )}
                        </span>
                    </div>
                    <div className={cx('form-mess--err')}>
                        {isError && (
                            <span>
                                Incorrect email or password information. Try
                                again.
                            </span>
                        )}
                    </div>
                    <span className={cx('target-link')}>Forgot password?</span>
                    <Button
                        disabled={disabled}
                        primary
                        className={cx('login-btn')}
                        onClick={(e) => handleSubmit(e)}
                    >
                        Log in
                    </Button>
                </form>
            </div>
        </Layout>
    );
}

export default LoginForm;
