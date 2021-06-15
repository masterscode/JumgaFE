import React from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";


const SignIn = () => {

  return (
    <Grid item xs={12} md={4}>
        <Typography variant='h5' gutterBottom>SIGN IN</Typography>
      <form noValidate autoComplete="off">

      <Typography variant='body2'> Email </Typography>
          <TextField 
            variant="outlined" 
            type="email" 
            required 
            fullWidth 
            margin='normal'
            />
        <Typography variant='body2'> Password </Typography>
          <TextField
            variant="outlined"
            type="password"
            required
            fullWidth
            margin='normal'
          />


        <Button
          startIcon={<LockOpenTwoToneIcon />}
          size="large"
          type="submit"
          variant="contained"
          fullWidth
          color='primary'
        >
          Sign in
        </Button>
    <FormControlLabel
    label="Remember my details"
    control={
        <Checkbox
        color='primary'
        />
    }
    />
      </form>
      <Typography>forgot Password?</Typography>
    </Grid>
  );
};

export default SignIn;
