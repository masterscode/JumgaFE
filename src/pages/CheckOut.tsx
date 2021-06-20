import React from "react";
import {Grid, Container, Typography, makeStyles, createStyles, Button} from '@material-ui/core';
import {CheckCircleTwoTone} from '@material-ui/icons';
import CheckOutForm from "../components/CheckOutForm";
import Cart from "./Cart";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";

const useStyles = makeStyles(()=>createStyles({
    checkoutElement:{padding:'30px'}
}))

const CheckOut = ()=>{
    const css = useStyles();
    return <Container style={{margin:'30px auto'}}>
        <Grid container>
            <Grid item md={4} className={css.checkoutElement}>
                <Typography variant='h4' style={{marginBottom:'15px'}}>
                    <CheckCircleTwoTone/>
                    Shipping Address
                </Typography>
                <CheckOutForm/>
            </Grid>
            <Grid item md={8}>
                <Cart/>
                <Button startIcon={<PaymentTwoToneIcon/>} color='primary' fullWidth variant='contained' disableElevation  size='large'>
                    Pay with PayStack
                </Button>
            </Grid>

        </Grid>
    </Container>
};


export default CheckOut;