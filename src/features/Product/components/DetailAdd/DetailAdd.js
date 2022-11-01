import { useState } from 'react';
import classNames from 'classnames/bind';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import detailAddStyles from './detailAddStyles';

import styles from './DetailAdd.module.scss'
const cx = classNames.bind(styles)

function DetailAdd({ onAdd }) {

    const [quanlity, setQuanlity] = useState(1)

    const handleAdd = () => {
        setQuanlity(prevState => prevState + 1)
    }
    const handleRemove = () => {
        setQuanlity(prevState => prevState - 1)
    }
    const handleAddQuanlity = () => {
        if (onAdd) onAdd(quanlity)
        setQuanlity(1)
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: "start",
            inline: "nearest"
        })
    }
    return (
        <Box sx={{ marginTop: '35px' }}>
            <Box sx={{ ...detailAddStyles.wrapQuanlity }}>
                <Typography sx={{ ...detailAddStyles.title }}>Quanlity</Typography>
                <Box sx={{ ...detailAddStyles.remove }} className={cx({
                    disable: quanlity <= 1
                })} onClick={handleRemove}>
                    <RemoveIcon fontSize='large' sx={{ color: '#ACACAE' }} />
                </Box>
                <Typography sx={{ fontSize: '1.4rem', minWidth: '30px', textAlign: 'center', userSelect: 'none' }}>
                    {quanlity}
                </Typography>
                <Box sx={{ ...detailAddStyles.add }} onClick={handleAdd}>
                    <AddIcon fontSize='large' sx={{ color: '#ACACAE' }} />
                </Box>
            </Box>
            <Box sx={{ ...detailAddStyles.wrapBtn }}>
                <button style={{ ...detailAddStyles.btnBuyNow }} onClick={handleAddQuanlity}>Buy Now</button>
                <button style={{ ...detailAddStyles.btnInstallment }} >Mua trước trả sau</button>
            </Box>
        </Box>
    )
}

export default DetailAdd

