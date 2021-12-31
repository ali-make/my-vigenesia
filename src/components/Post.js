import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

const font = "'Pushster', cursive;";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    height: "100%",
    position: "relative",
  },
  infoCard: {
    display: "flex",
    justifyContent: "space-between",
    margin: "12px 16px 0 16px",
  },
  postMotivasi: {
    textAlign: "center",
    fontFamily: font,
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 16px 8px 16px",
  },
}));

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <div className={classes.infoCard}>
        <Typography variant="body1">{}</Typography>
        <Typography variant="body2">
          {moment(post.tanggal_update).fromNow()}
        </Typography>
      </div>

      <CardContent>
        <div>
          <Typography
            className={classes.postMotivasi}
            variant="h5"
            gutterBottom
          >
            &ldquo; {post.isi_motivasi} &rdquo;
          </Typography>
        </div>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          style={{ color: "red" }}
          onClick={() => dispatch(deletePost(post.id))}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setCurrentId(post.id)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
