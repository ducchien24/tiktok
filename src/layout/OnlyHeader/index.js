import PropTypes from 'prop-types'
import { Header } from '~/layout/components';

function OnlyHeader({ children }) {
    return (
        <>
            <Header />
            <div className="content">{children}</div>
        </>
    );
}

OnlyHeader.propTypes = {
    children: PropTypes.node.isRequired,
}
export default OnlyHeader;
