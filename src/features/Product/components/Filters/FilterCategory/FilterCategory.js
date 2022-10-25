import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import WindowIcon from '@mui/icons-material/Window';
import { Box, Typography } from "@mui/material";
import classNames from 'classnames/bind';
import categoryService from '~/services/categoryService';
import TitleSkeleton from '../../TitleSkeleton';
import styles from './FilterCategory.module.scss';

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
            }}> <WindowIcon sx={{ mr: '5px', mb: '1px' }} />Danh mục sản phẩm</Typography>
            {loading ? (<TitleSkeleton />) : (
                <ul className={cx('list')}>
                    {categoryList.map((item) => (
                        <li className={cx('item')}
                            onClick={() => handleCategoryClick(item)} key={item.id}>
                            <BookmarkBorderOutlinedIcon />
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