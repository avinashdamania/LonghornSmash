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





const h2style = {
    textAlign: "center",
    fontFamily: "GothamBlackRegular",
    fontSize: "4vw",
    marginTop: "20px",
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


            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={ankurkaushik} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Ankur Kaushik</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={josephstuder} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Joseph Studer</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={avinash} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Avinash Damania</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>just a dude</Card.Text>
            </Card.Body>
            </Card>



        </div>



        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
        }}>

            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={joji} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Joji Sherman</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={fawad} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Fawad Haq</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>Treasurer</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20vw', margin: '5vw', height: '30vw' }}>
            <Card.Img variant="top" src={alana} />
            <Card.Body>
                <Card.Title style={{fontSize: "2vw"}}>Alana Hernandez</Card.Title>
                <Card.Text style={{color: 'black', fontSize: "2vw"}}>Vice President</Card.Text>
            </Card.Body>
            </Card>

            




        </div>






    </div>
)