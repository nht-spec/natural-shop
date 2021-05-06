import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';


Register.propTypes = {};
function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar}= useSnackbar();
    const handleSubmit= async (values)=>{
        try{
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            const {closeDialog}= props;
            if(closeDialog){
                closeDialog();
            }
            console.log('new user', user);
            enqueueSnackbar('register sucsessfully',{variant:'success'});
        }catch(error) {
            enqueueSnackbar(error.message,{variant:'error'});
       }
    };
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;