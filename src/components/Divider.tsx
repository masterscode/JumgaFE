import React from "react";
import {Typography} from '@material-ui/core';

interface propType{text:string;}

const Divider = ({text}:propType)=>{
    return (
        <div className="divider">
            <span className='divider-text'>{text}</span>
        </div>
    )
}

export default Divider;