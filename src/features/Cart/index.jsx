import { Box, Button, Typography } from '@material-ui/core';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../footer';
import { removeFromCart } from './cartSlice';
import { cartItemsCountSelector, cartItemsSelector, cartTotalSelector } from './selectors';
import './styles.scss';
CartFeature.propTypes = {
    product: PropTypes.object,
    cartItems: PropTypes.array,
    onSubmit : PropTypes.func,
};

CartFeature.defaulProps = {
    cartItems: [],  
}
function CartFeature(props) {
    const dispatch = useDispatch();
    const cartTotal = useSelector(cartTotalSelector);
    const cartItems = useSelector(cartItemsSelector); 
    const cartQuantity = useSelector(cartItemsCountSelector);
    const handleRemoveToCartSubmit = (id) =>{
        const action = removeFromCart(id)
        console.log(action);
        dispatch(action);
        };
    return (
    <div className='cart__page'>
        <Box className='cart__list'>
            <Box className='cart__info'>
            <Box className='cart__item'>
            <Typography>My Cart</Typography>
                         <h5></h5>
            {cartItems.map((cartItem) => (
                <div key={cartItem.product.name}>
                     <div className='border__bottom'>
                         <Box className='product__item'>
                         <img style={{width:'70px', paddingBottom:'15px'}} src={cartItem.product.image.url} alt="error" />
                         <p style={{width:'145px'}}> {cartItem.product.name}</p>
                         <p>{cartItem.quantity}</p>
                         <p>${cartItem.product.PriceProducts}</p>
                             <HighlightOffOutlinedIcon style={{cursor:'pointer'}}  onClick={() => handleRemoveToCartSubmit(cartItem.id)}></HighlightOffOutlinedIcon>
                         </Box>
                     <h2></h2>
                     </div>
                 </div>
            ))}
            </Box>
            <Box className='cart__total'>
                <Typography>Order Summary</Typography>
                <h5></h5>
                <Box className='cart__totalList'>
                    <Box className='cart__totalname'>
                    <Box className='subtotal__cart'>
                    <p>SubTotal:</p>
                    <p>${cartTotal}</p>
                    </Box>
                    <Box className='subQuantity__cart'>
                    <p>TotalQuantity:</p>
                    <p>{cartQuantity}</p>
                    </Box>
                    </Box>
                    <Box className='subQuantity__cart'>
                    <p>Total:</p>
                    <p>${cartTotal}</p>
                    </Box>
                </Box>
            <Button fullWidth style={{backgroundColor:'#576855', borderRadius:'unset'}}>Checkout</Button>
            </Box>
            </Box>
        </Box>
        <Box className='footer__page4'>
            <p></p>
            <Footer/>
            </Box> 
    </div>
    );
}

export default CartFeature;