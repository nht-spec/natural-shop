import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@material-ui/core';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import ContactField from "../../../../components/form-control/ContactField/index";
import InputFullField from '../../../../components/form-control/InputFullField';
import './style.scss';

ContactsForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ContactsForm(props) {
    const {enqueueSnackbar}= useSnackbar();
    const schema = yup.object().shape({
     fullname: yup.string().required('Please enter your full name').test('should has at least two words','Please enter 2 or more characters', (value) =>{
         console.log('Value', value)
         return value.split(' ').length >=2}),
     email: yup.string().required('Please enter your email').email('Invalid email'),
     phonenumber: yup.number().min(10, 'Please enter at least ten number').typeError('Please enter a number'),
     comment: yup.string().required('Please enter a comment'),

 });
    const form= useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phonenumber: '',
      comment: '',
    },
    resolver: yupResolver(schema),
});
const handleSubmit = (values,e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8zq9tjp', 'template_sgne9kd', e.target, 'user_AhgypaaKySTp3K69XkY5P')
      .then((result) => {
          console.log(result.text);
          enqueueSnackbar('Thanks for Submitting!', {variant:'default'})
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
        <div className='contact__page2'>
       <form onSubmit={form.handleSubmit(handleSubmit)}>
           <ul className='input__list'>
               <Box className='input__title'>
                <Box className='input__name'>
                <p>Enter Your Name *</p>
                <li><ContactField  name="fullname" label='Full Name' form={form}/></li>
                </Box>
                <Box className='input__email'>
                <p>Enter Your Email *</p>
                <li><ContactField name="email" label='Email Address' form={form}/></li>
                </Box>
               </Box>
                <p>Enter Your Phone *</p>
                <li><InputFullField name="phonenumber" label='Phone Number' form={form}/></li>
                <p>Enter Your Message *</p>
                <li><InputFullField className='input__request' name="comment" label='Write Your Request' form={form}/></li>  
                <Box className='input__submit'>
                <button className='input__btn'>Submit</button>               
                </Box>
           </ul>
       </form>
        </div>
    );
}

export default ContactsForm;