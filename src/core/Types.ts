export interface InputField {
    name: string;
    value: string;
}

export interface RegistrationFields {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegistrationFieldsError {
    firstName: undefined | boolean ;
    lastName: undefined | boolean;
    email: undefined | boolean;
    password: undefined | boolean;
}

export interface LoginFields{
    email:string; password:string;
}