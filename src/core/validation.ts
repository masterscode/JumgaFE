// @ts-ignore
import Joi from 'joi-browser';
import {InputField, RegistrationFields} from './Types';
import React from "react";

export const validationSchema = {
    email:Joi.string().email().required().label('Email'),
    fullName:Joi.string().required().label('Full Name'),
    firstName:Joi.string().required().label('First Name'),
    lastName:Joi.string().required().label('Last Name'),
    password:Joi.string().required().label('Password'),
    telephone: Joi.number().min(11).max(13).required().label('Telephone')
};

export const validateField = ({name, value}: InputField) => {
    const field = {[name]: value};
    const schema = {[name]: validationSchema[name as keyof typeof validationSchema]};
    const {error} = Joi.validate(field, schema);
    return !error;
}

export const doLogin = (event:React.FormEvent) => {
    //
}

export const doRegister = (event:React.FormEvent, fields:RegistrationFields)=>{
    //
}