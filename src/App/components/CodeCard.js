import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import customHighlight from '../styles/hljs/custom-highlight';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class CodeCard extends React.Component {
    render() {
        const codeString = `const func = () => {
            const x = 20;
            const xx = 22;
}`;
        return (
            <Card raised={true} style={{ backgroundColor: this.props.theme.palette.secondary.main, margin: "16px", padding: "0px" }}>
                <CardContent>
                    <div style={{ borderRadius: "16px" }}>
                        <SyntaxHighlighter language="javascript" style={customHighlight}>
                            {codeString}
                        </SyntaxHighlighter></div>
                </CardContent>
            </Card>
        );
    }
}

export default withTheme(CodeCard);