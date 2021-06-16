import React, { Fragment } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {Grid, Typography, Box} from '@material-ui/core';

const Auth=()=>{
    return (
        <Fragment>
        
        <Grid container justify='space-evenly'>
            <Grid container justify='space-evenly'>
                <Grid item xs = {8}>
                <Typography variant='h3'>Hello there!</Typography>
                <Box fontWeight='fontWeightBold' fontFamily='fontFamilySans'>You are about to be Boxed!</Box>
                <Typography variant='body1' gutterBottom>Please sign in or create account to continue</Typography>
                </Grid>
            </Grid>
            <SignIn/>
            <SignUp/>

        </Grid>
        </Fragment>
    )
}

export default Auth;