
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import WindowIcon from '@mui/icons-material/Window';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Box, Typography } from "@mui/material";
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import categoryService from '~/services/categoryService';
import styles from './FilterCategory.module.scss';
import TitleSkeleton from '../../TitleSkeleton';
// import TitleSkeleton from '../../TitleSkeleton';

const cx = classNames.bind(styles)

function FilterCategory({ onChange }) {

    const [categoryList, setCategoryList] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchApi = async () => {
            try {
                setLoading(true)
                const list = await categoryService.getAll({})
                setCategoryList(list)
            } catch (error) {
                console.log('ERROR: ', error)
                setLoading(true)
            }
            setLoading(false)
        }
        fetchApi()
    }, [])

    const handleCategoryClick = (category) => {
        onChange(category.id)
    }

    return (
        <Box p='0 20px' minHeight='236px'>
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
                userSelect: 'none'
            }}> <WindowIcon sx={{ mr: '5px' }} />Danh mục sản phẩm</Typography>
            {loading ? (<TitleSkeleton />) : (
                <ul className={cx('list')}>
                    {categoryList.map((item) => (
                        <li className={cx('item')}
                            onClick={() => handleCategoryClick(item)} key={item.id}>
                            <LabelImportantIcon />
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            )}


        </Box>
    )
}

FilterCategory.propTypes = {
    onChange: PropTypes.func,
}

export default FilterCategory