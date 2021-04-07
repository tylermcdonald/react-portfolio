import React from 'react';
import { withTheme, withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import customHighlight from '../styles/hljs/custom-highlight';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        color: props => props.isSelected ? '#151718' : '#C4C4C4',
        backgroundColor: props => props.isSelected ? '#C4C4C4' : '#0000',
        borderRadius: "32px",
        maxHeight: "1.5em",
        minWidth: "5.5em",
        fontWeight: "bold",
        transition: `background-color 250ms, color 250ms;`,
        '&:hover': {
            color: props => props.isSelected ? '#151718' : 'blue',
            backgroundColor: props => props.isSelected ? '#C4C4C4' : '#C4C4C4',
        }
    },
    label: {
        textTransform: 'none',
    }
});

export default function CodeHeaderButton(props) {
    const theme = useTheme();
    const classes = useStyles(props);

    return (<Button onClick={props.onClick} style={{marginTop: theme.spacing(1)}} className={classes.root} classes={{ label: classes.label }}>{props.text}</Button>);
};