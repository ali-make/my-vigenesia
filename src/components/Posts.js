import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Posts = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default Posts;
