import React from "react";
import { Typography,Grid, Divider} from '@material-ui/core';
import ItemQuantity from "./ItemQuantity";
import CartProduct from "./CartProduct";

interface ICartItem{}



const CartItem =()=>{
    return (
    <Grid container alignItems='center' justify='space-between'>
    <Grid item md={6}>
        <CartProduct/>
    </Grid>
    <Divider flexItem orientation='vertical'/>

    <Grid item md={1}>
        <ItemQuantity />
    </Grid>

    <Divider flexItem orientation='vertical'/>
    <Grid item md={2}>
        <Typography  align='center'>{'#1000'}</Typography>
    </Grid>
    <Divider flexItem orientation='vertical'/>
    <Grid item md={2}>
        <Typography align='center'>{'#1000'}</Typography>
    </Grid>
</Grid>
    );
}

export default CartItem;