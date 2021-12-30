/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "14px 10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  heading: {
    color: "#519259",
    textDecoration: "none",
    padding: "10px",
    fontWeight: "bold",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(true);

  return (
    <AppBar className={classes.appBar} color="inherit" position="static">
      <Typography
        className={classes.heading}
        variant="h4"
        component={Link}
        to="/"
      >
        Vigenesia
      </Typography>

      <Toolbar>
        {user ? (
          <></>
        ) : (
          <Button color="primary" variant="contained">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
