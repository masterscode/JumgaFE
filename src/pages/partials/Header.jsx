import React from "react";
import {AppBar, Typography, Grid } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";


const Header = () => {

  const menuAnchors = ["home", "shoes", "clothes", "accessories"];
  
  return (
      <AppBar position='sticky' elevation={0} >
        <Toolbar>
          <Grid container justify='space-around'>
            <Grid item>one </Grid>
            <Grid item>two</Grid>
            <Grid item>three</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
