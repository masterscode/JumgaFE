import React  from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Grid, Typography, Container } from "@material-ui/core";

const Auth = () => {
  return (
    <section style={{margin:'30px auto'}}>
      <Container>
          <Typography variant="h3">Hello there!</Typography>
          <Typography variant="body1" gutterBottom>
            Please sign in or create account to continue
          </Typography>
      </Container>
      <Container>
        <Grid container justify="space-between">
          <SignIn />
          <SignUp />
        </Grid>
      </Container>
    </section>
  );
};

export default Auth;
