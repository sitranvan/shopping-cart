import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Address from '../Address';
import FilterCategory from '../Filters/FilterCategory';
import FilterPrice from '../Filters/FilterPrice';
import FilterService from '../Filters/FilterSerive';

function ProductFilters({ filters, onChange, loading }) {

    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return
        const newFilters = {
            // rule strapi api => filter category.id = id
            'category.id': newCategoryId
        }
        onChange(newFilters)
    }
    const handlePriceChange = (values) => {
        if (!onChange) return
        onChange(values)
    }

    const handleServiceChange = (values) => {
        if (!onChange) return
        onChange(values)
    }

    return (
        <Box>
            <FilterCategory loading={loading} onChange={handleCategoryChange} />
            <FilterPrice onChange={handlePriceChange} />
            <FilterService filters={filters} onChange={handleServiceChange} />
            <Address />
        </Box>
    );
}

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    loading: PropTypes.bool
}
export default ProductFilters;