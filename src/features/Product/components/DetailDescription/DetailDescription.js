
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
function DetailDescription({ product = {} }) {
    const safeDescription = DOMPurify.sanitize(product.description)
    return (
        <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    )
}


DetailDescription.propTypes = {
    product: PropTypes.object
}

export default DetailDescription