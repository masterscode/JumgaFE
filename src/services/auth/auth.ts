import React from "react";
import {RegistrationFields, LoginFields} from "../../core/Types";
import axios from "axios";

const baseUrl = 'localhost';
export const doLogin = async (event:React.FormEvent, data:LoginFields) => {
    const loginResponse = await axios.post(baseUrl, data);
}

export const doRegister = async (event:React.FormEvent, data:RegistrationFields)=>{
    const registrationResponse = await axios.post(baseUrl, data);
}