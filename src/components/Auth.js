import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./InputAuth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: { margin: theme.spacing(3, 0, 2) },
}));

const initializeState = { nama: "", profesi: "", email: "", password: "" };

const Auth = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initializeState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {
    setFormData(initializeState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="nama"
                  label="Full Name"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="profesi"
                  label="Your Profession"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              type="email"
              label="Email Address"
              handleChange={handleChange}
              autoFocus
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button
            className={classes.submit}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            {isSignup ? "Sing Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Button onClick={switchMode}>
              {isSignup ? "Sign In?" : "Sign Up?"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
