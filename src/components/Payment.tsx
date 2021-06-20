import React from "react";
import {Button} from "@material-ui/core";
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';

const Payment = ()=>{
    return <Button startIcon={<PaymentTwoToneIcon/>} size='large'>Pay with PayStack</Button>

};

export default Payment;