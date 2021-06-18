import React from "react";
import {Typography} from '@material-ui/core';

interface propType{text:string;}

const Divider = ({text}:propType)=>{
    return (
        <div className="divider">
            <Typography variant='h3' align='center' className='divider-text'>{text}</Typography>
        </div>
    )
}

export default Divider;