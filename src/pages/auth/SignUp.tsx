import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";

const SignUp = () => {
  return (
    <Grid item xs={12} md={5}>
        <Typography variant='h5' gutterBottom>CREATE ACCOUNT</Typography>
      <form noValidate autoComplete="off">
      <Typography variant="body2"> First Name </Typography>
        <TextField
          variant="outlined"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <Typography variant="body2"> Last Name </Typography>
        <TextField
          variant="outlined"
          type="text"
          required
          fullWidth
          margin="normal"
        />
        <Typography variant="body2"> Email </Typography>
        <TextField
          variant="outlined"
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <Typography variant="body2"> Create Password </Typography>
        <TextField
          variant="outlined"
          type="password"
          required
          fullWidth
          margin="normal"
        />
        <Typography variant="body2"> Confirm Password </Typography>
        <TextField
          variant="outlined"
          type="password"
          required
          fullWidth
          margin="normal"
        />

        <Button
          startIcon={<ExitToAppTwoToneIcon />}
          size="large"
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
        >
          create account
        </Button>

      </form>
      <Typography>forgot Password?</Typography>
    </Grid>
  );
};

export default SignUp;
