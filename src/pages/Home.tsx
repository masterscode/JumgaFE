import React from "react";
import { Typography, Container,Grid } from "@material-ui/core";
import useStyles from "./css-in-js/Style";
import Divider from "../components/Divider";
import Product from "../components/Product";

const Home = () => {
    const css = useStyles();
  return (
  <React.Fragment>
        <section className={css.carousel}>
            <Typography>hello</Typography>
        </section>
        <Divider text='Shop your style'/>
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Blanditiis fugit ratione beatae vitae! Deserunt voluptatum 
            dolorum nulla, eius, ex et repellat reiciendis veniam 
            perspiciatis ad eveniet quia ab error consequuntur!
        </div>
        <Container>
            <Grid container spacing={1}>
            {[2,443,32,3].map(val => <Grid item md={3} xs={12}><Product key={val}/></Grid>)}
            </Grid>
        </Container>
  </React.Fragment>
  );
};

export default Home;
