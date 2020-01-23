import React from 'react'
import logo from './assets/LS_Logo.png'
import ReactPlayer from 'react-player'
import Image from 'react-bootstrap/Image'
import { Col, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

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

         
    </div>
)