import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { goToBooksFeed } from '../../routes/Cordinator';
import bookReviewLogo from '../../images/logo2.png'

function ButtonAppBar() {

  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar className={classes.root} position="sticky">
        <Toolbar>
            <Button className={classes.logo} onClick={() => goToBooksFeed(history)}>
                <img  className={classes.image} src={bookReviewLogo} alt="Book Review Logo"/>
                <Typography className={classes.text}>Book Reviews</Typography>            
            </Button>
        </Toolbar>
        <Toolbar>
            <Button color={'inherit'} onClick={() => null}>
                <Typography className={classes.buttonText}>Sign In</Typography>    
            </Button>
            <Button color={'inherit'} onClick={() => null}>
                <Typography className={classes.buttonText}>Sign Out</Typography>    
            </Button>
        </Toolbar>  
    </AppBar>
  );
}

export default ButtonAppBar

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "10vh",
    },
    logo: {
        color: 'inherit',
    },
    buttonText: {
        fontSize: '15px',
        letterSpacing: '3px',
        color: 'inherit',
        "@media(max-width: 800px)" : {
            letterSpacing: '1px',
        }  
    },
    image: {
        height: "50px",       
    },
    text: {  
        letterSpacing: '1px',
        fontSize: '20px',
        marginLeft: '10px',
        "@media(max-width: 800px)" : {
            visibility: 'hidden',
        }  
    },

});