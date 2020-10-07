import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { app } from "../../services/firebase";
import Copyright from '../../components/Copyright';
import { goToSignUp } from '../../routes/Cordinator';
import SignInImage from '../../images/sign-in-image.jpg'
import { makeStyles, Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import { AuthContext } from '../../services/Auth';

function SignIn() {

  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/')
      } catch (error) {
        console.error(error)
      }
    },
    [history]
  );

  useEffect(() => {
    if(!!currentUser){
      history.push('/')
    }
  })

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={classes.paper}>
          <Typography variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField variant="outlined" margin="normal" required fullWidth name="email" label="Email" type="email" autoFocus/>
            <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password"/>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Button variant="text" color="secondary" onClick={() => goToSignUp(history)}>
                Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright/>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;

// Material UI

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      width: "100%",
    },
    image: {
      backgroundImage: `url(${SignInImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));