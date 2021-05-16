import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import QuatityField from '../../../components/form-control/QuatityField';
import './style.scss';
AddToCartForm.propTypes = {
    onSubmit : PropTypes.func,
};

function AddToCartForm({ onSubmit= undefined }) {
    const schema = yup.object().shape({
        quantity: yup.number().min(1,'please enter at least 1').max(50,'Please enter less than 50 products').typeError('please enter a number'),
       })
       const form =useForm({
           defaultValues:{
             quantity: 1,
           },
           resolver: yupResolver(schema)
       });
       const handleSubmit = async (values)=>{
          if(onSubmit){
             await onSubmit(values);
          }   
       };
    return (
      <div>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <QuatityField name='quantity' form={form}/>
        <Box style={{padding:'0 8px 0 8px'}} >
          <Button fullWidth style={{backgroundColor:'rgb(87, 104, 85)',color:'white', borderRadius:'unset'}} type='submit'>add to card</Button>
        </Box>
          </form>
      </div>
    );
}

export default AddToCartForm;