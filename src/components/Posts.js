import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post.id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
