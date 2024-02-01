import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    primary,
    outline,
    outlineDark,
    text,
    disabled,
    small,
    large,
    rounded,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx(className, {
        wrapper: 'wrapper',
        // [className] : className,
        primary,
        outline,
        outlineDark,
        text,
        disabled,
        small,
        large,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    className : PropTypes.string,
    href : PropTypes.string,
    to : PropTypes.string,
    primary : PropTypes.bool,
    outline : PropTypes.bool,
    outlineDark : PropTypes.bool,
    text : PropTypes.bool,
    disabled : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    rounded : PropTypes.bool,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    children : PropTypes.node.isRequired,
    onClick : PropTypes.func,
}

export default Button;
