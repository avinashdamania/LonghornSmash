import React from 'react'
import logo from './assets/LS_Logo.png'
import tp1 from './assets/tp1.jpg'
import tp2 from './assets/tp2.jpg'
import tp3 from './assets/tp3.jpg'
import tp4 from './assets/tp4.jpg'
import ReactPlayer from 'react-player'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';
import ImageGallery from 'react-image-gallery';=

const hstyle = {
    textAlign: "center",
    fontFamily: "SmashUltimate",
    fontSize: "100px",
    color: '#cd6c3c'
};
const h2style = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    marginTop: "20px",
    color: '#cd6c3c'
};
var intViewportWidth = window.innerWidth;
var intViewportHeight = window.innerHeight;


const ipation = [
    {
      original: tp1
    },
    {
      original: tp2
    },
    {
      original: tp3
    },
  ];

export const Home = () => (
    <div style={{
        backgroundColor: '#000000', width: '100%',
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
        <ImageGallery items={ipation} />
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>
        
        </div>  
        <Row> <Col> <h2 style={h2style}> Spring 2019 </h2> </Col> </Row>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        }}>
    
        </div> 
    </div>
)