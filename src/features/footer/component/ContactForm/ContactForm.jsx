import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import './style.scss';
ContactForm.propTypes = {   
};

function ContactForm(props) {
    const {enqueueSnackbar}= useSnackbar();
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your email').email('Invalid email'),
    });
    const form= useForm({
        defaultValues: {      
          email: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values,e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8zq9tjp', 'template_sgne9kd', e.target, 'user_AhgypaaKySTp3K69XkY5P')
      .then((result) => {
          console.log(result.text);
          enqueueSnackbar('Thanks for submitting!', {variant:'success'})
      }, (error) => {
          console.log(error.text);
      });

    const {onSubmit}= props;
    if(onSubmit){
     onSubmit(values);
    }
    form.reset(); 
};
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField className='input__gmail' name="email" label='email' form={form}/>
            <Box className='submit__list'> 
            <Button className='submit__btn' fullWidth type='submit'>Subscribe</Button>
            </Box>
    </form>
    );
}

export default ContactForm;