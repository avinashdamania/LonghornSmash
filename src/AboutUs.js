import React from 'react'
import tp1 from './assets/tp1.jpg'
import tp2 from './assets/tp2.jpg'
import tp3 from './assets/tp3.jpg'
import tp4 from './assets/tp4.jpg'
import { Col, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { withTheme } from 'styled-components'



const hstyle = {
    textAlign: "center",
    fontFamily: "SmashUltimate",
    fontSize: "65px",
    color: 'white'
};

const h2style = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop: "20px",
    color: 'white'
};

const pstyle = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    color: 'white'
};
const pstyle2 = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop:"20px",
    color: 'white'
};

export const AboutUs = () => (
    <div style={{
        backgroundColor: '#000', width: '100%',
        height: '100%'}}>
        <h2 style={hstyle}>ABOUT US</h2>
        <p style={pstyle}>Longhorn Smash is an organization fostered by a unified passion for the Super Smash Bros series. Its members build friendship through playing video games together, organizing social events, and of course, competing in weekly tournaments hosted by the organization’s administration team.</p> 

        <p style={pstyle}>From the start of the 2019-2020 semester it became a branch of Longhorn Gaming, UT’s biggest esports club. This allowed Longhorn Smash to send their esports team to collegiate tournaments, given the opportunity to compete across the country.</p>
        <p style={pstyle}>The primary way our group communicates is through Discord; you can join below!</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'24px'
        }}><td textAlign= 'center'> <a textAlign='center' href={"https://discord.gg/UrNNR92"}> Join our discord!</a> </td></div>

        <h2 style={h2style}> Find out about the history of our org</h2>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>
            <YouTube videoId={'WGsMY2Xzjow'}/>
            {/* <ReactPlayer height={.5*intViewportHeight} width={.7*intViewportWidth} url='https://youtu.be/WGsMY2Xzjow' History /> */}
        </div>  
        <h2 style={h2style}> Watch a highlight video! </h2>
        <Row> 
            <Col> 
                <h2 style={h2style}> Spring 2019 </h2>
            </Col> 
        </Row>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        }}>
            <Row>
                <Col>
                    <YouTube videoId={'WC3WtXONu34'} />
                    <h2 style={h2style}> Fall 2018 </h2>
                    <YouTube videoId={'O_2Et1UFjaM'} />
                </Col>  
            </Row>      
        </div> 
        <p style={pstyle2}>Find us on HornsLink</p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:'24px'
        }}><td> <a textAlign='center' href={"https://utexas.campuslabs.com/engage/organization/cgc"}>Click me!</a> </td>
        </div>
    </div>
)