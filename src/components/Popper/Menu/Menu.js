import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { useState } from 'react';

import Header from './Header/Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { Wrapper as PopperWraper } from '~/components/Popper';
const cx = classNames.bind(styles);

const defaultF = () => {};
function Menu({ items = [], children, isUser,hideOnClick=false, onChange = defaultF }) {
    const [history, setHistory] = useState([{ data: items }]);
    const historyLength = history.length;
    const historySelected = history[historyLength - 1];
    const renderItems = () => {
        return historySelected.data.map((d, i) => {
            const children = d.children;
            return (
                <MenuItem
                    key={`item-${i}`}
                    className={cx('menu-item')}
                    data={d}
                    onClick={
                        (children &&
                            (() =>
                                setHistory((previous) => [
                                    ...previous,
                                    {
                                        title: children.title,
                                        data: children.data,
                                    },
                                ]))) ||
                        (() => onChange(d))
                    }
                />
            );
        });
    };

    const handleBack = () => {
        setHistory(history.slice(0, historyLength - 1));
    };
    // Reset menu to first page
    const handleResetMenu = () => {
        setHistory(history.slice(0, 1));
    };
    return (
        <Tippy
            // disabled
            // visible
            hideOnClick={hideOnClick}
            placement="bottom-end"
            interactive
            delay={[0, 600]}
            offset={isUser ? [-5, 20] : [0, 20]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWraper className={cx('menu-popper')}>
                        {historyLength > 1 && (
                            <Header
                                title={historySelected.title}
                                onBack={handleBack}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWraper>
                </div>
            )}
            onHidden={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    isUser: PropTypes.bool,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
