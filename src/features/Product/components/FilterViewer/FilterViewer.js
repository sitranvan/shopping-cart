import { useMemo } from "react";
import PropTypes from 'prop-types'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Chip } from "@mui/material";
import FILTER_LIST from './FilterList';
function FilterViewer({ filters, onChange }) {

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters])

    return (
        <Box sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            listStyle: 'none',
            m: '10px 0 15px 0',
            p: '0 20px',
            gap: '6px 12px',
        }}>
            {visibleFilters.map(x => (
                <li key={x.id}>
                    <Chip
                        sx={{
                            fontSize: '1.3rem',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        deleteIcon={<ClearIcon />}
                        icon={<BookmarkAddedIcon />}
                        size='medium'
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable ? null
                            : () => {
                                const newFilters = x.onToggle(filters)
                                onChange(newFilters)
                            }}
                        onDelete={x.isRemovable
                            ? () => {
                                const newFilters = x.onRemove(filters)
                                onChange(newFilters)
                            } : null}
                    />
                </li>
            ))}
        </Box>
    )
}

FilterViewer.propTypes = {
    onChange: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired
}

export default FilterViewer