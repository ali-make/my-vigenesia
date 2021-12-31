import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Paper,
  Grid,
  TextField,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./InputProfile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edit_profile } from "../actions/profile";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  avatar: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: { margin: theme.spacing(3, 0, 2) },
}));

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [formData, setFormData] = useState({
    nama: user?.data.nama,
    profesi: user?.data.profesi,
    email: user?.data.email,
    password: user?.data.password,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(edit_profile(formData, navigate("/")));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      iduser: user?.data?.iduser,
      [e.target.name]: e.target.value,
    });
  };
  const switchMode = () => {
    setEditProfile((prevEditProfile) => !prevEditProfile);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">
          {editProfile ? "Edit Profile" : "Profile"}
        </Typography>
        <Avatar className={classes.avatar}>
          {user?.data?.nama?.charAt(0)}
        </Avatar>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid container spacing={2}>
            {editProfile ? (
              <>
                <Input
                  name="nama"
                  label="Full Name"
                  handleChange={handleChange}
                />
                <Input
                  name="profesi"
                  label="Your Profession"
                  handleChange={handleChange}
                />
                <Input
                  name="email"
                  label="Email Address"
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              </>
            ) : (
              <Grid item sm={12}>
                <TextField
                  label="Full Name"
                  value={user?.data?.nama}
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Your Profession"
                  value={user?.data?.profesi}
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
                <TextField
                  label="Email Address"
                  value={user?.data?.email}
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: "16px" }}
                />
              </Grid>
            )}
          </Grid>
          {editProfile ? (
            <>
              <Button
                className={classes.submit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Save
              </Button>
            </>
          ) : null}
          <Grid
            container
            justifyContent="flex-end"
            style={{ paddingTop: "10px" }}
          >
            <Grid item>
              <Button onClick={switchMode} color="primary">
                {editProfile ? "Show Profile?" : "Edit Profile?"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Profile;
