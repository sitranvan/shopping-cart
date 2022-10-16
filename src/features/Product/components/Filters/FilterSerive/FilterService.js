
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './FilterService.module.scss';

const cx = classNames.bind(styles)

const services = [
    { value: 'isPromotion', label: 'Có khuyến mãi' },
    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
]

function FilterService({ filters, onChange }) {

    const handleChange = (e) => {
        if (!onChange) return;
        onChange({ [e.target.name]: e.target.checked });
    }

    return (
        <Box p='0 20px' minHeight='228px'>

            <Typography variant='h6' sx={{
                fontSize: '1.3rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                height: '48px',
                lineHeight: '48px',
                color: '#000',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid #cacaca',
                userSelect: 'none'
            }}> <FlightTakeoffIcon sx={{ mr: '5px' }} />Dịch vụ</Typography>

            <ul className={cx('list')}>
                {services.map((service) => (
                    <li key={service.value} className={cx('item')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    )
}

FilterService.propTypes = {
    onChange: PropTypes.func,
}

export default FilterService