import React from "react";
import {Grid, Avatar, Typography, makeStyles, createStyles, Button} from '@material-ui/core';
import { RemoveCircle} from '@material-ui/icons';


const useStyles = makeStyles(()=>createStyles({
    capitalize:{textTransform:'capitalize', fontWeight:'bold'}
}));


const CartProduct = ()=>{
    const css = useStyles();
    return <Grid container alignItems='center'>
        <Grid item md={2} >
            <Avatar variant='square' src='logo512.png' sizes='small' />
        </Grid>
        <Grid item md={10}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='body1' className={css.capitalize}>{'casual flat slippers'}</Typography>
                    <Typography variant='caption' color='textSecondary'>Size - EU 36</Typography>
                </Grid>
                <Grid item xs={12}>
                        <Button startIcon={<RemoveCircle/>} color='primary'>REMOVE</Button>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
}

export default CartProduct;