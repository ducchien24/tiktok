import classNames from 'classnames/bind';
import { useContext } from 'react';

import Layout from '../Layout';
import Button from '~/components/Button';

import { ModalContext } from '~/components/ModalProvider';
import { LoginContext } from '~/components/LoginProvider/LoginProvider';

import styles from './MenuForms.module.scss';

const cx = classNames.bind(styles);

function MenuForms({ data, loginList, registerList }) {
    const { setTypeForm } = useContext(ModalContext);
    const {setIsError} = useContext(LoginContext);

    const handleOpenLoginForm = (openForm) => {
        openForm(setTypeForm);
        setIsError(false);
    }
    return (
        <Layout>
            <h2 className={cx('title')}>{data.title}</h2>
            <div className={cx('login-options')}>
                {
                    loginList &&
                    data.options.map((o) => (
                        <Button
                            key={o.title}
                            className={cx('login-btn')}
                            disabled={o.disabled}
                            onClick={() => handleOpenLoginForm(o.login)}
                        >
                            <span className={cx('login-icon')}>{o.icon}</span>
                            <span className={cx('login-title')}>{o.title}</span>
                        </Button>
                    ))
                }
                {
                    registerList && 
                    data.options.map((o) => (
                        <Button
                            key={o.title}
                            className={cx('login-btn')}
                            disabled={o.disabled}
                            // onClick={() => o.login(setTypeForm)}
                        >
                            <span className={cx('login-icon')}>{o.icon}</span>
                            <span className={cx('login-title')}>{o.title}</span>
                        </Button>
                    ))
                }
            </div>
        </Layout>
    );
}

export default MenuForms;
