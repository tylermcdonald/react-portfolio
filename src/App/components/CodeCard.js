import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';
import customHighlight from '../styles/hljs/custom-highlight';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CodeHeaderButton from './CodeHeaderButton';

export default function CodeCard(props) {

    const codeData = {
        'Node.js': {
            code:
                `const func = () => {
    console.log("Hello!");
    const greetings = ["Welcome to my portfolio.", "Feel free to reach out to me at tyler.mcdonald545@gmail.com", "Or you can contact me at my LinkedIn below"];
    greetings.forEach((greeting) => {
        console.log(greeting);
    });
}
func();`,
            language: 'javascript',
        },
        'C++': {
            code: `int func(){
    cout << "Hello World";
    return 0;
}`,
            language: 'cpp',
        },
        'Java': {
            code: `int func(){
    System.out.println("Hello World");
}`,
            language: 'java',
        }
    }

    const theme = useTheme();
    const [selectedButton, setSelectedButton] = useState("Node.js");

    const programHeaderButtons = Object.keys(codeData).map((codeKey) => {
        return <CodeHeaderButton onClick={() => { setSelectedButton(codeKey) }} isSelected={selectedButton === codeKey} text={codeKey} />
    });
    return (
        <Card raised={true} style={{ backgroundColor: theme.palette.secondary.main, margin: "16px", padding: "0px", display: "flex", width: "100%", minHeight: "20em", maxHeight: "20em", zIndex:"10" }}>
            <CardContent style={{ padding: theme.spacing(0) }}>
                <div style={{ display: "flex", flexDirection: "row", paddingLeft: "1em" }}>
                    {programHeaderButtons}
                </div>
                <SyntaxHighlighter wrapLines={true} showInlineLineNumbers={true} showLineNumbers={true} language={codeData[selectedButton].language} style={customHighlight}>
                    {codeData[selectedButton].code}
                </SyntaxHighlighter>
            </CardContent>
        </Card>
    );
}