import { Button, FormHelperText, OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import './style.scss';
QuatityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function QuatityField(props) {
    const {form, name, label, disabled}=props;
    const {errors ,setValue}= form;
    const hassError = !!errors[name];
    return (
        <FormControl fullWidth style={{marginLeft:'8px'}} error={hassError} >
          <InputLabel>{label}</InputLabel>
          <Controller
            name={name}
            control={form.control}
            render={({onChange, onBlur, value, name})=>(
              <div style={{height:'90px'}}>
                <Button style={{fontSize:'22px', backgroundColor:'unset'}} className='remove__btn' onClick={()=>setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1: 1)}> - </Button>
                 <OutlinedInput className='quantity__btn'style={{padding:'0 0 0 45%', borderRadius:'unset', width:'96%'}}    
                 id={name}
                //  type='number'
                 label={label}
                 disabled={disabled}
                 value={value}
                 onChange={onChange}
                 onBlur={onBlur}
                 />   
                <Button style={{fontSize:'22px', backgroundColor:'unset'}}  className='add__btn' onClick={()=>setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1: 1)}> + </Button>
              </div> 
            )}    
          />
          <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuatityField;