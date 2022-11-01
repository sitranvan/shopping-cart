
import { Fragment, useCallback, useRef, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ModalConfirm from '~/components/ModalConfirm'
import { formatCurrency } from '~/utils'
import NoProduct from '../Product/components/NoProduct'
import { removeFromCart, setQuanlity } from './cartSlice'
import CartHead from './components/CartHead'
import CartItems from './components/CartItems'
import CartPay from './components/CartPay'
import { cartItemCountSelector, cartItemsSelector, cartItemTotalSelector } from './selectors'


function CartFeature() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [show, setShow] = useState(false)
    const ref = useRef(null)
    const product = useSelector(cartItemsSelector)
    const countItem = useSelector(cartItemCountSelector)
    const totalItem = useSelector(cartItemTotalSelector)

    const totalPriceProduct = useCallback((id) => {
        console.log(111)
        const index = product.findIndex(x => Number(x.id) === Number(id))
        return formatCurrency(product[index].product.salePrice * product[index].quanlity)
    }, [product])


    const handleRemoveProductCart = (id) => {
        setShow(true)
        ref.current = id
    }
    const handleConfirmRemove = () => {
        const action = removeFromCart(ref.current)
        dispatch(action)
        setShow(false)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleDecrease = (id) => {
        const index = product.findIndex(x => Number(x.id) === Number(id))
        const action = setQuanlity({ id, quanlity: product[index].quanlity - 1 });
        if (product[index].quanlity <= 1) {
            handleRemoveProductCart(id)
        }
        dispatch(action)
    }

    const handleIncrease = (id) => {
        const index = product.findIndex(x => Number(x.id) === Number(id))
        const action = setQuanlity({ id, quanlity: product[index].quanlity + 1 });
        dispatch(action)
    }

    const handleContinueBuy = () => {
        history({
            pathname: '/products'
        })
    }

    return (
        <Box mt={2} minHeight='100vh'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item width='850px'>
                        {countItem > 0 ? (
                            <Fragment>
                                <CartHead countItem={countItem} />
                                <CartItems product={product}
                                    onRemove={handleRemoveProductCart}
                                    onDecrease={handleDecrease}
                                    onIncrease={handleIncrease}
                                    totalPriceProduct={totalPriceProduct}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <NoProduct style={{ marginTop: '10px' }} />
                                <Typography onClick={handleContinueBuy} sx={{
                                    backgroundColor: 'rgb(253, 216, 53)',
                                    color: 'rgb(74, 74, 74)',
                                    fontWeight: 500,
                                    fontSize: '1.4rem',
                                    p: '10px 55px',
                                    display: 'inline-block',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        cursor: 'pointer',
                                        opacity: '0.8'
                                    }
                                }}>Tiếp tục mua sắm</Typography>
                            </Fragment>
                        )}
                    </Grid>
                    <Grid item sx={{ flex: 1 }}>
                        <CartPay
                            countItem={countItem}
                            totalItem={totalItem}
                        />
                    </Grid>
                </Grid>
            </Container>
            <ModalConfirm isShow={show} onClose={handleClose} onConfirm={handleConfirmRemove} />
        </Box>
    )
}

export default CartFeature