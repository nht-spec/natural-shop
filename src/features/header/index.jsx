import { Box, Button, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { AccountCircle, Close } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Login from '../Auth/components/Login';
import Register from '../Auth/components/Register';
import { logout } from '../Auth/userSlice';
import './styles.scss'
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
      marginTop:'118px',

    },
}));

const MODE= {
  LOGIN: 'login',
  REGISTER: 'register',
};
 function Header(props) {
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
    return (
        <div>
          <Box className='header__nav'>FREE SHIPPING ON ORDERS OVER 50$</Box>  
          <div className='nav__bar'>
          <h1 className='nav__title'>frais</h1>
          <ul className='nav__link '>
            <li><NavLink className='text-decoration font' to='/products'>Shop all</NavLink></li>
            <li><NavLink className='text-decoration font' to='/category'>For body</NavLink></li>
            <li><NavLink className='text-decoration font' to='/productforhome'>For Home</NavLink></li>
            <li><NavLink className='text-decoration font' to='/products'>About</NavLink></li>
            <li><NavLink className='text-decoration font' to='/products'>Contact</NavLink></li>
          </ul>
          {!isLoggedIn &&(
          <button  className='login__btn' onClick={handleClickOpen}>
            <AccountCircle className={classes.avatar} style={{fontSize:'25px', margin:'0 10px 0 0', color:'rgb(66, 66, 66)'}}/>Log In
          </button>         
          )}
          {isLoggedIn &&(
            <IconButton  onClick={handleUserClick}>
              <AccountCircle/>
            </IconButton>
          )}
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
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
              <Button color='primary' onClick={()=> setMode(MODE.LOGIN)}>Already have an account. Login here</Button>
             </Box>
            </>)}

            {mode === MODE.LOGIN && (
            <>
             <Login closeDialog={handleClose}/>
             <Box>
              <Button color='primary' onClick={()=> setMode(MODE.REGISTER)}>Register here</Button>
             </Box>
            </>)}
          </DialogContent>
      </Dialog>
            </div>    
        </div>
    );
}

export default Header;