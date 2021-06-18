import React from "react";
import {
  Grid,
  List,
  ListItem,
  Typography, ButtonGroup, TextField, Button, makeStyles
} from "@material-ui/core";

const customCSS = makeStyles({
  borderless:{border:'none'}
})

const generateListElements = (values: string[]): JSX.Element[] => {
  let key = 23;
  return values.map((value: string) => (
    <ListItem key={key++}>
      <Typography variant="body2">{value}</Typography>
    </ListItem>
  ));
};

const Footer = () => {
  const css = customCSS();

  return (
      <Grid container alignItems='center' style={{background:'#F5F5F5'}}>
        <Grid item xs={12} md={3}>
          Logo placeholder
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
            {generateListElements(['About Us', 'Contact', 'Terms and Conditions'])}
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>Subscribe to our newletter</Typography>
          <ButtonGroup size='small' color='primary' variant='contained'>
            <TextField variant='outlined' />
            <Button>
              <Typography>Ok</Typography>
            </Button>

          </ButtonGroup>
        </Grid>
        <Grid item xs={12} md={3} alignContent='flex-end'>
          <Typography variant='body2'>Main address</Typography>
          <Typography variant='body2'>email</Typography>
          <Typography variant='body2'>telephone</Typography>
        </Grid>
      </Grid>
  );
};

export default Footer;
