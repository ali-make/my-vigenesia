/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { deepPurple } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  drawer: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
  toolbar: {
    display: "flex",
    justifyContent: "end",
    width: 200,
  },
  userName: {
    textTransform: "capitalize",
    marginLeft: 20,
    marginRight: 40,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textTransform: "uppercase",
  },
  [theme.breakpoints.down("sm")]: {
    purple: {
      display: "none",
    },
    userName: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setIsOpen(open);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/auth");

    setUser(null);
  };

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

      <Toolbar className={classes.toolbar}>
        {user ? (
          <>
            <Avatar className={classes.purple}>
              {user?.data?.nama?.charAt(0)}
            </Avatar>
            <Typography className={classes.userName}>
              {user?.data?.nama}
            </Typography>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              className={classes.drawer}
              anchor="right"
              open={isOpen}
              onClose={toggleDrawer(false)}
            >
              <div
                className={classes.fullList}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <MenuList>
                  <MenuItem>
                    <Typography
                      component={Link}
                      to="/profile"
                      style={{ textDecoration: "none" }}
                    >
                      My Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText primary={"Member List"} />
                  </MenuItem>
                  <MenuItem>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </div>
            </Drawer>
          </>
        ) : (
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/auth"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
