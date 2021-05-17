import { Badge, Box, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { AccountCircle, Close, ShoppingCartOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Login from '../Auth/components/Login';
import Register from '../Auth/components/Register';
import { logout } from '../Auth/userSlice';
import { showMiniCart } from '../Cart/cartSlice';
import { cartItemsCountSelector } from '../Cart/selectors';
import './styles.scss';
Header.propTypes = {
    closeDialog: PropTypes.func,
};

const useStyles= makeStyles((theme)=>({
    closeButton:{
        position: 'absolute',
        top:theme.spacing(1),
        right: theme.spacing(1),
        zIndex: 1,
    },
    avatar:{
      position: 'absolute',
      fontSize:'25px',
      color:'rgb(66, 66, 66)',
      top:theme.spacing(19),
      left:theme.spacing(145),
    },
    ShoppingCart:{
      position: 'absolute',
      fontSize:'25px',
      color:'rgb(66, 66, 66)',
      top:theme.spacing(19),
      left:theme.spacing(152),
    }
}));

const MODE= {
  LOGIN: 'login',
  REGISTER: 'register',
};
 function Header() {
   const history = useHistory()
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const dispatch= useDispatch();
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const classes =useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] =useState(MODE.LOGIN)
  const [anchorEl, setAnchorEl]= useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick =(e) =>{
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu =() =>{
    setAnchorEl(null);
  };
  const handleLogoutClick=() =>{
    const action =logout();
    dispatch(action);
    setAnchorEl(null);
  }
  const handleCartClick = () => {
    history.push('/cart')
  }
  const handleShowMiniCart = () => {
    const action = showMiniCart();
    dispatch(action)
  }
    return (
        <div>
          <Box className='header__nav'>FREE SHIPPING ON ORDERS OVER 50$</Box>  
          <div className='nav__bar'>
          <NavLink to='/' exact><h1 className='nav__title'>frais</h1></NavLink>
          <ul className='nav__link '>
            <li><NavLink className='text-decoration font' to='/products'>Shop all</NavLink></li>
            <li><NavLink className='text-decoration font' to='/category'>For body</NavLink></li>
            <li><NavLink className='text-decoration font' to='/productforhome'>For Home</NavLink></li>
            <li><NavLink className='text-decoration font' to='/about'>About</NavLink></li>
            <li><NavLink className='text-decoration font' to='/contact'>Contact</NavLink></li>
          </ul>
          {!isLoggedIn &&(
          <Button  className='login__btn' onClick={handleClickOpen}>Log In</Button>         
          )}

           <IconButton className={classes.ShoppingCart} aria-label="show 4 new mails" color="inherit" onClick={handleCartClick}>
          <Badge badgeContent= {cartItemsCount} color="secondary">
            <ShoppingCartOutlined onClick={ handleShowMiniCart}/>
          </Badge>
        </IconButton>

          {isLoggedIn &&(
            <IconButton className={classes.avatar} onClick={handleUserClick}>
              <AccountCircle />
            </IconButton>
          )}
          <Menu
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>

          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open} 
            onClose={handleClose}>
            <IconButton onClick={handleClose} className={classes.closeButton}>
              <Close/>
            </IconButton>
          <DialogContent>
            {mode === MODE.REGISTER && (
            <>
             <Register closeDialog={handleClose}/>
             <Box>
              <Button fullWidth color='primary' onClick={()=> setMode(MODE.LOGIN)}> Login here</Button>
             </Box>
            </>)}

            {mode === MODE.LOGIN && (
            <>
             <Login closeDialog={handleClose}/>
             <Box>
              <Button fullWidth color='primary' onClick={()=> setMode(MODE.REGISTER)}>Register here</Button>
             </Box>
            </>)}
          </DialogContent>
      </Dialog>
            </div>    
        </div>
    );
}

export default Header;