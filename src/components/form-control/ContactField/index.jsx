import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

ContactField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function ContactField(props) {
    const {form, name, label, disabled}=props;
    const {errors}= form;
    const hassError = errors[name];
    return (
        <Controller
         name={name}
         fullWidth
         control={form.control}
         as={TextField}
         label={label}
         disabled={disabled}
         variant='standard'
         margin='normal'
         error={!!hassError}
         helperText={errors[name]?.message}
        />
    );
}

export default ContactField;