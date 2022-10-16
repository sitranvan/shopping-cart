import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ProductSort({ onChange, currentSort }) {
    const tabStyles = {
        fontSize: '1.3rem'
    }
    const handleChange = (e, value) => {
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Typography color='text.primary' variant='h6' sx={{
                p: '0 20px',
                mb: '8px',
                textTransform: 'uppercase',
                fontSize: '1.3rem',
                fontWeight: 600
            }}>Sắp xếp theo</Typography>
            <Tabs
                sx={{ mb: 1 }}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                value={currentSort}
            >
                <Tab sx={{ ...tabStyles }} value="salePrice:ASC" label="Giá thấp đến cao" />
                <Tab sx={{ ...tabStyles }} value="salePrice:DESC" label="Giá cao đến thấp" />
            </Tabs>
        </Box>
    );
}
