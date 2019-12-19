import React from 'react'
import { Carousel } from 'react-bootstrap';
import minus from './assets/ian.jpg'
import waltz from './assets/walter.jpg'
import favorit from './assets/fawad.jpg'

const hstyle = {
    textAlign: "center",
    fontFamily: "Aclonica",
    fontSize: "65px"
};

const textstyle = {
    fontFamily: "Aclonica",
    color: "black"
}


export const PR = () => (
    <div style={{
        backgroundColor: '#e9f5f8', width: '100%',
        height: '100%'}}>
        <h2 style={hstyle}>UT Power Ranking Fall 2019</h2>
       

       <Carousel>
            <Carousel.Item>
                <img
                src={minus}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={textstyle}>#1: Minus</h3>
                <p style={textstyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={favorit}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={textstyle}>#2: favorit</h3>
                <p style={textstyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                src={waltz}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={textstyle} >#3 Waltz</h3>
                <p style={textstyle} >Praesent commodo cursus magna, vel consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
       </Carousel>
    </div>
)