import React from "react";  
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";   


const Product = ()=>{
    return <Card>
        <CardMedia src='./logo192.png' title='image title' style={{height:0, paddingTop:'56.25%'}}/>

        <CardContent>
            <Typography align='center' >hello card</Typography>
            <Typography align='center'>hello card</Typography>
        </CardContent>
    </Card>
};

export default Product;