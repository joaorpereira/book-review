import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

function Buttons({text, page}) {

    const classes = useStyles();
    const history = useHistory();

    return (
            <Button className={classes.button} onClick={() => page(history)}>
                <Typography className={classes.buttonText}>{text}</Typography>    
            </Button>
    )
}

export default Buttons

const useStyles = makeStyles({
    button: {
        marginLeft: '5px',
        marginRight: '10px',
        "@media(max-width: 800px)" : {
            marginLeft: '0px',
            marginRight: '0px',
        }  
    },
    buttonText: {
        color: 'white',
        fontSize: '14px',
        letterSpacing: '2px',
        textTransform:'uppercase',
        "@media(max-width: 800px)" : {
            letterSpacing: '0px',
            textTransform:'capitalize',
        }  
    },
});
