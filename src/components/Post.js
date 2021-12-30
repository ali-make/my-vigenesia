import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.infoCard}>
        <Typography variant="body1">alinur</Typography>
        <Typography variant="body2">2 day ago</Typography>
      </div>

      <CardContent>
        <div>
          <Typography
            className={classes.postMotivasi}
            variant="h5"
            gutterBottom
          >
            &ldquo; Hello Guys? &rdquo;
          </Typography>
        </div>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" style={{ color: "red" }} onClick={() => {}}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
