import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './ImageDefault.module.scss';
function ImageP(
    {
        alt,
        src,
        className,
        fallback: customFallback = images.user_img_default,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

const Image = forwardRef(ImageP);

ImageP.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
