import '../App.css';
import { Button, CardContent, Card } from '@material-ui/core';
import React from 'react';

import CodeCard from '../components/CodeCard';
import background from '../resources/background.png';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img src={background} style={{ position: "absolute", top: "0px", right: "0px", width: "600px" }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: "4em", zIndex: "10" }}>
                            <p style={{ fontSize: "2.5em", margin: "0 0 16px 0" }}><b>Hey,</b> I'm Tyler.</p>
                            <p style={{ fontSize: "1.5em", margin: "0 0 16px 0" }}>I build innovative products for <u>corporations</u> & <u>startups</u>.</p>
                            <div style={{ width: "12em", display: "flex", height: "3em" }}>
                                <Button style={{ fontSize: '.75em' }} variant="contained" color="primary" fullWidth={true}>View Projects</Button>
                            </div>
                        </div>
                        <CodeCard />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: "128px" }}>
                        <Button>Github</Button>
                        <Button>LinkedIn</Button>
                        <Button>Twitter</Button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: "256px", padding: '0 10% 0 10%' }}>
                        <Card style={{ backgroundColor: '#9BD1FB', height: '10em', minWidth: '10em' }}>
                            <CardContent></CardContent>
                        </Card>

                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem', marginTop: '1rem' }}>
                            <p style={{ fontSize: "1.5rem", margin: "0 0 16px 0", fontWeight: '600', color: '#173DE2' }}>ABOUT ME</p>
                            <p style={{ fontSize: ".8rem", margin: "0", fontWeight: '500', color: '#747474' }}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum eu sagittis justo. Morbi a urna
                            enim. Suspendisse sed lacinia turpis, eu porta nisl.
Fusce volutpat finibus tortor</p>
                        </div>
                    </div>
                    <p style={{ fontSize: "2rem", marginTop: '128px', fontWeight: 'bold', color: 'black' }}>Projects</p>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Card style={{backgroundColor: '#4E6CDA', minHeight: '16em', width:'55%', padding: '1em', minWidth: '28em', maxWidth: '32em', margin: '.5em 0 .5em 0'}}>
                        <CardContent>
                        <p style={{ fontSize: ".8rem", margin: "0 0 .5em 0", fontWeight: '600', color: 'white' }}>Software Developer</p>
                        <p style={{ fontSize: "4rem", margin: '0', fontWeight: 'bolder', color: 'white' }}>Zillow</p>
                        </CardContent>
                    </Card>
                    <Card style={{backgroundColor: '#9BD1FB', width: '35%', minWidth: '16em', maxWidth: '20em', minHeight: '16em', padding: '1em', margin: '.5em'}}>
                        <CardContent>
                        <p style={{ fontSize: ".8rem", margin: "0 0 .5em 0", fontWeight: '600', color: 'white' }}>Android Developer</p>
                        <p style={{ fontSize: "3rem", margin: '0', fontWeight: 'bolder', color: 'white' }}>Nuggett</p>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default HomePage;