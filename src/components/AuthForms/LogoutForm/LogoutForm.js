import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';

import { ModalContext } from '~/components/ModalProvider';
import { LoginContext } from '~/components/LoginProvider/LoginProvider';

import { auth } from '~/services';

import styles from './LogoutForm.module.scss';

const cx = classNames.bind(styles);

function LogoutForm() {
    const { handleCloseModal } = useContext(ModalContext);
    const { handleDeleteData } = useContext(LoginContext);

    const [isLoading, setIsLoading] = useState(false);
    const handleLogout = async () => {
        setIsLoading(true);
        await auth.logout();
        handleDeleteData();

        setIsLoading(false);
        localStorage.removeItem('token');
        handleCloseModal();
    };
    return (
        <div className={cx('wrapper')}>
            {isLoading && (
                <span className={cx('spinner-icon')}>
                    <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                </span>
            )}
            <p className={cx('text')}>Are you sure you want to log out?</p>
            <div className={cx('btn-action')}>
                <Button
                    className={cx('btn', 'btn-cancel')}
                    onClick={() => handleCloseModal()}
                >
                    Cancel
                </Button>
                <Button
                    className={cx('btn', 'btn-out')}
                    outline
                    onClick={handleLogout}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default LogoutForm;
