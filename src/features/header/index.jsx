import { Badge, Box, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { AccountCircle, Close, ShoppingCartOutlined } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
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
    ShoppingCart:{
      fontSize: '30px'
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
  const [anchorEL, setAnchorEL]= useState(null);
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

  const handleMenuClick =(e) =>{
    setAnchorEL(e.currentTarget);
  };
  const handlMenuClose =() =>{
    setAnchorEL(null);
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
            <Box className='cart__btn'>
          <IconButton color="inherit" onClick={handleCartClick}>
          <Badge badgeContent= {cartItemsCount} color="secondary">
            <ShoppingCartOutlined style={{fontSize:'30px'}} onClick={ handleShowMiniCart}/>
          </Badge>
        </IconButton>
            </Box>
          <NavLink style={{textDecoration:'unset'}} to='/' exact><h1 className='nav__title'>frais</h1></NavLink>

        <Box className='menu__list'>
        <Button onClick={handleMenuClick}>
     <MenuIcon  style={{fontSize:'40px'}}/>
      </Button>
      <Menu
        className='menu__app'
        anchorEL={anchorEL}
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
        open={Boolean(anchorEL)}
        onClose={ handlMenuClose}
      >
        <MenuItem onClick={handlMenuClose}>
        <IconButton className='menu__closebtn' onClick={handleClose}>
              <Close style={{fontSize:'30px'}}/>
          </IconButton>
        <ul className='menu__listpages'>
          <li>
          {!isLoggedIn &&(
            <Button className='menu__loginbtn' onClick={handleClickOpen}>
              <AccountCircleIcon style={{fontSize:'30px', marginRight:'10px'}}/>
              Log In</Button>         
          )}
          {isLoggedIn &&(
            <IconButton onClick={handleUserClick}>
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
          </li>
            <li><NavLink className='menu__navelink' to='/products'>Shop all</NavLink></li>
            <li><NavLink className='menu__navelink' to='/category'>For body</NavLink></li>
            <li><NavLink className='menu__navelink' to='/productforhome'>For Home</NavLink></li>
            <li><NavLink className='menu__navelink' to='/about'>About</NavLink></li>
            <li><NavLink className='menu__navelink' to='/contact'>Contact</NavLink></li>
          </ul>
        </MenuItem>
      </Menu>
        </Box>
          <Box className='nav__link'>
          <ul >
            <li><NavLink className='text-decoration font' to='/products'>Shop all</NavLink></li>
            <li><NavLink className='text-decoration font' to='/category'>For body</NavLink></li>
            <li><NavLink className='text-decoration font' to='/productforhome'>For Home</NavLink></li>
            <li><NavLink className='text-decoration font' to='/about'>About</NavLink></li>
            <li><NavLink className='text-decoration font' to='/contact'>Contact</NavLink></li>
            <li>
          {!isLoggedIn &&(
          <Button onClick={handleClickOpen}>Log In</Button>         
          )}
          {isLoggedIn &&(
            <IconButton onClick={handleUserClick}>
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
            </li>
          </ul>
          </Box>
            </div>    
        </div>
    );
}

export default Header;