import PropTypes from 'prop-types'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Pagination, PaginationItem } from "@mui/material";

function ProductPagination({ pagination, onChange }) {
    return (
        <Pagination
            sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 3
            }}
            count={Math.ceil(pagination.total.data / pagination.limit) || 0}
            page={pagination.page}
            color="primary"
            onChange={onChange}
            renderItem={(item) => (
                <PaginationItem sx={{
                    fontSize: '1.3rem'
                }}
                    components={{ previous: ArrowBackIosNewIcon, next: ArrowForwardIosIcon }}
                    {...item}
                />
            )}
        />
    )
}

ProductPagination.propTypes = {
    onchange: PropTypes.func,
    pagination: PropTypes.object.isRequired
}


export default ProductPagination