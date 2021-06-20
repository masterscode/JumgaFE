import React from "react";
import {Button, Grid, TextField, Typography,} from "@material-ui/core";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import {doRegister, validateField} from "../../core/validation";
import {InputField, RegistrationFields, RegistrationFieldsError} from '../../core/Types';


const SignUp = () => {
    const fields: RegistrationFields = {firstName: '', lastName: '', email: '', password: ''};
    const [inputField, setInputField] = React.useState(fields);
    const errorFields : RegistrationFieldsError = {firstName: undefined, lastName:undefined, email:undefined, password:undefined};
    const [error, setError] = React.useState(errorFields);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let {name, value}: InputField = event.currentTarget;
        setError(errorFields=>({
                [name]: validateField({name, value}),
                ...errorFields
            }));

        setInputField(oldState => ({
                [name]: value,
                ...oldState
            }));

    }
    return (
        <Grid item xs={12} md={5}>
            <Typography variant='h5' gutterBottom>CREATE ACCOUNT</Typography>
            <form noValidate autoComplete="off" onSubmit={(e: React.FormEvent) => doRegister(e, inputField)}>
                <Typography variant="body2"> First Name </Typography>
                <TextField
                    variant="outlined"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                    value={inputField.firstName}
                    required
                    fullWidth
                    margin="normal"
                    name='firstName'
                    error={error.firstName}
                />
                <Typography variant="body2"> Last Name </Typography>
                <TextField
                    variant="outlined"
                    type="text"
                    required
                    fullWidth
                    value={inputField.lastName}
                    margin="normal"
                    name='lastName'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <Typography variant="body2"> Email </Typography>
                <TextField
                    variant="outlined"
                    type="email"
                    required
                    fullWidth
                    error={error.email}
                    value={inputField.email}
                    margin="normal"
                    name='email'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                <Typography variant="body2"> Create Password </Typography>
                <TextField
                    variant="outlined"
                    type="password"
                    required
                    fullWidth
                    value={inputField.password}
                    error={error.password}
                    margin="normal"
                    name='password'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                />
                {/*<Typography variant="body2"> Confirm Password </Typography>
        <TextField
          variant="outlined"
          type="password"
          required
          fullWidth
          margin="normal"
          name='password'
        /> */}

                <Button
                    startIcon={<ExitToAppTwoToneIcon/>}
                    size="large"
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                    disabled={error.firstName && error.lastName && error.email}
                >
                    create account
                </Button>

            </form>
        </Grid>
    );
};

export default SignUp;
