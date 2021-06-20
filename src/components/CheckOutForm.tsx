import React from "react";
import {TextField,Typography} from '@material-ui/core';

const CheckOutForm = () =>{
    return(
        <form noValidate autoCapitalize='true' autoComplete='false'>
            <Typography variant='body2'>Email </Typography>
            <TextField type='email' fullWidth variant='outlined' margin='normal' />
            <Typography>Full Name</Typography>
            <TextField type='text' fullWidth variant='outlined' margin='normal' />
            <Typography> Address </Typography>
            <TextField type='text' fullWidth variant='outlined' margin='normal' multiline rows={5} />
            <Typography>State / Province</Typography>
            <TextField type='text' fullWidth variant='outlined' margin='normal' />
            <Typography>Phone number</Typography>
            <TextField type='email' fullWidth variant='outlined' margin='normal' />


        </form>
    )
};

export default CheckOutForm;