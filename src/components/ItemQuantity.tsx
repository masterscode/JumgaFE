import React from "react";
import {  FormControl, MenuItem, Select} from '@material-ui/core';


const range = ():number[]=>{
    const count:number[] = [];
    for (let index = 1; index <= 25; index++) {
        count.push(index);
    }
    return count;
}

const ItemQuantity = ()=>{

    const [open,setOpen] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);
    const options: number[] = range();
    const handleQuantityChange = (event:React.ChangeEvent<{ value: unknown }>)=>{
            setQuantity( event.target.value as number );
    }
    return (
        <FormControl fullWidth>
            <Select
                open={open}
                value={quantity}
                onChange = {handleQuantityChange}
                onOpen={()=>setOpen(true)}
                onClose={()=>setOpen(false)}
            >
                {options.map((value:number, index:number)=><MenuItem value={value} key={index} >{value}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default ItemQuantity;