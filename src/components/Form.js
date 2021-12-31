import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
  },
}));

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [postData, setPostData] = useState({ isi_motivasi: "" });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p.id === currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(postData));
    } else {
      dispatch(createPost({ ...postData, iduser: user?.data.iduser }));
    }

    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({ isi_motivasi: "" });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.form} ${classes.root}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {setCurrentId ? "Editing Post" : "Create Post"}
        </Typography>

        <TextField
          name="isi_motivasi"
          variant="outlined"
          label="Motivasi"
          fullWidth
          multiline
          minRows={4}
          value={postData.isi_motivasi}
          onChange={(e) =>
            setPostData({ ...postData, isi_motivasi: e.target.value })
          }
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
