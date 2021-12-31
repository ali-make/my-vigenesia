import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
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
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
