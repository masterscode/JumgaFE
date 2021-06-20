import React from "react";  
import {Container, Typography , makeStyles, createStyles, Chip} from '@material-ui/core';
import CartItem from "../components/CartItem";


const useStyles = makeStyles(()=>createStyles({
    margin:{margin:'15px auto', padding:'15px'},
    makeBorder:{border:'solid thin lightgray'}
}));

const Cart = ()=>{
    const css = useStyles();
    const [cartItem,setCartItem] = React.useState([{}]);
    return (
        <React.Fragment>
            <Container className={css.margin}>
                <Typography variant='h4'>Shopping Cart  <Chip label={ cartItem.length }/> </Typography>
            </Container>
            <Container className={`${css.margin} ${css.makeBorder}`}>
                <CartItem />
            </Container>
        </React.Fragment>
    )
};


export default Cart;