import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';

import { Header } from '~/layout/components';
import Sidebar from '../components/Sidebar/Sidebar';
import ModalMenuItem from '~/components/ModalMenuItem';

import { ModalContext } from '~/components/ModalProvider';
import { LoginContext } from '~/components/LoginProvider/LoginProvider';

import { getCurrentUser } from '~/services';

import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const modalContext = useContext(ModalContext)
    const {handleSetData} = useContext(LoginContext)

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getCurrentUser();
            // console.log(res);
            if(res) {
                handleSetData(res);
            }
        }
        if(token){
            fetchApi();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            {modalContext.isOpen && <ModalMenuItem/>}
        </div>
    );
}


DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;
