import React from "react";
import {Grid, Avatar, Typography, makeStyles, createStyles, ButtonGroup, Button} from '@material-ui/core';
import {FavoriteBorderOutlined, RemoveCircle} from '@material-ui/icons';


const useStyles = makeStyles(()=>createStyles({
    capitalize:{textTransform:'capitalize', fontWeight:'bold'}
}));


const CartProduct = ()=>{
    const css = useStyles();
    return <Grid container>
        <Grid item md={2}>
            <Avatar variant='square' src='logo512.png' sizes='' />
        </Grid>
        <Grid item md={10}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='body1' className={css.capitalize}>{'casual flat slippers'}</Typography>
                    <Typography variant='caption' color='textSecondary'>Size - EU 36</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup size='small' fullWidth variant='text'>
                        <Button startIcon={<FavoriteBorderOutlined/>} color='primary'>MOVE TO FAVORITES</Button>
                        <Button startIcon={<RemoveCircle/>} color='primary'>REMOVE</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
}

export default CartProduct;