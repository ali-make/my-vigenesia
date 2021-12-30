import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "./Posts";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 30,
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
