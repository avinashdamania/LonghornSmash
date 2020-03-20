import React from 'react'
import tp1 from '../assets/tp1.jpg'
import tp2 from '../assets/tp2.jpg'
import tp3 from '../assets/tp3.jpg'
import tp4 from '../assets/tp4.jpg'
import { Col, Row, Container, Image, Card, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { withTheme } from 'styled-components'
import josephstuder from '../assets/officers/joseph.jpg'
import ankurkaushik from '../assets/officers/ankur.jpg'
import avinash from '../assets/officers/avinash.jpg'
import joji from '../assets/officers/joji.jpg'
import alana from '../assets/officers/alana.jpg'
import fawad from '../assets/officers/fawad.jpg'
import '../css/Officers.css'





const hstyle = {
    textAlign: "center",
    fontFamily: "SmashUltimate",
    fontSize: "65px",
    color: 'white'
};

const hstyle2 = {
    textAlign: "center",
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

const pstyle3 = {
    fontFamily: "GothamBlackRegular",
    fontSize: "25px",
    color: 'white'
};

export const Officers = () => (
    <div style={{
        backgroundColor: '#000', width: '100%',
        height: '100%'}}>


        <h2 style={h2style}> Meet our officers!</h2>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>


            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={ankurkaushik} />
            <Card.Body>
                <Card.Title>Ankur Kaushik</Card.Title>
                <Card.Text style={{color: 'black'}}>President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={josephstuder} />
            <Card.Body>
                <Card.Title>Joseph Studer</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={avinash} />
            <Card.Body>
                <Card.Title>Avinash Damania</Card.Title>
                <Card.Text style={{color: 'black'}}>just a dude</Card.Text>
            </Card.Body>
            </Card>



        </div>



        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={joji} />
            <Card.Body>
                <Card.Title>Joji Sherman</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={fawad} />
            <Card.Body>
                <Card.Title>Fawad Haq</Card.Title>
                <Card.Text style={{color: 'black'}}>Treasurer</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={alana} />
            <Card.Body>
                <Card.Title>Alana Hernandez</Card.Title>
                <Card.Text style={{color: 'black'}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            




        </div>






    </div>
)