import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button } from '@material-ui/core';
import { goToBooksFeed } from '../../routes/Cordinator';

function ButtonAppBar() {

  const classes = useStyles();
  const history = useHistory()

  return (
    <AppBar className={classes.root} position="sticky">
        <Toolbar>
            <Button className={classes.logo} onClick={() => goToBooksFeed(history)}>Book Reviews</Button>
        </Toolbar>
        <Toolbar>
            <Button className={classes.button}>Login</Button>
            <Button className={classes.button}>Logout</Button>
        </Toolbar>  
    </AppBar>
  );
}

export default ButtonAppBar

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        textTransform: 'uppercase',
        letterSpacing: '3px',
        fontSize: '20px',
        color: 'inherit',
    },
    button: {
        fontSize: '15px',
        letterSpacing: '3px',
        color: 'inherit',
    }
});