import React from 'react'
import logo from './assets/LS_Logo.png'
import ReactPlayer from 'react-player'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';

const hstyle = {
    textAlign: "center",
    fontFamily: "SmashUltimate",
    fontSize: "100px"
};
const h2style = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop: "20px"
};
var intViewportWidth = window.innerWidth;
var intViewportHeight = window.innerHeight;

export const Home = () => (
    <div style={{
        backgroundColor: '#e9f5f8', width: '100%',
        height: '100%'}}>
        <h2 style={hstyle}>LONGHORN SMASH</h2>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
        }}>
        <Image src={logo} fluid width='50%' />
        </div>
        <h2 style={h2style}> Find out about the history of our org</h2>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>
        <ReactPlayer height={.5*intViewportHeight} width={.7*intViewportWidth} url='https://youtu.be/WGsMY2Xzjow' History />
        </div>  
        <h2 style={h2style}> Watch a highlight video! </h2>
        <Row> <Col> <h2 style={h2style}> Spring 2019 </h2> </Col> </Row>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        }}>
        <Row>
            <Col>
                <ReactPlayer height={.5*intViewportHeight} width={.7*intViewportWidth} url='https://www.youtube.com/watch?v=WC3WtXONu34' Highlight1 />
                <h2 style={h2style}> Fall 2018 </h2>
                <ReactPlayer height={.5*intViewportHeight} width={.7*intViewportWidth} url='https://www.youtube.com/watch?v=O_2Et1UFjaM' Highlight2 />
            </Col>  
        </Row>      
        </div>  
    </div>
)