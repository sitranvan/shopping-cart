import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import classNames from "classnames/bind";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyFormat from 'react-currency-format';
import styles from './FilterPrice.module.scss'

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
            [e.target.name]: e.target.value.replace(',', '')
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
                <MonetizationOnIcon sx={{ mr: '5px' }} />
                Theo giá
            </Typography>

            <Box sx={{ p: '0 6px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CurrencyFormat className={cx('input')} name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} thousandSeparator={true} />
                    <ArrowForwardIcon />
                    <CurrencyFormat className={cx('input')} name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} thousandSeparator={true} />
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

export default FilterPrice