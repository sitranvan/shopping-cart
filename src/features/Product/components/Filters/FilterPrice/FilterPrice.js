import { useState } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyFormat from 'react-currency-format';
import styles from './FilterPrice.module.scss';

const cx = classNames.bind(styles)
function FilterPrice({ onChange }) {

    const [values, setValues] = useState({
        // rule api _gte, _lte
        salePrice_gte: 0,
        salePrice_lte: 0
    })

    const handleChange = (e) => {

        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value.replaceAll(',', '')
        }))
    }

    const handleSubmit = () => {
        onChange && onChange(values)

        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        })
    }

    return (
        <Box p='0 20px'>
            <Typography variant="h6" sx={{
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
            }}>
                <MonetizationOnIcon sx={{ mr: '5px', mb: '1px' }} />
                Theo giá
            </Typography>

            <Box >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CurrencyFormat thousandSeparator={true} className={cx('input')} name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                    <ArrowForwardIcon />
                    <CurrencyFormat thousandSeparator={true} className={cx('input')} name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
                </Box>
                <Box sx={{
                    textAlign: 'left',
                    pb: '20px'
                }} >
                    <Button sx={{ mt: 2, fontSize: '1.1rem' }} onClick={handleSubmit} variant="outlined">Áp dụng</Button>
                </Box>
            </Box>
        </Box>
    )
}

FilterPrice.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default FilterPrice