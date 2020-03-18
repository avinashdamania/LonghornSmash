import React from 'react'
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import prbanner from '../assets/pr/prbanner.jpg';
import minus from '../assets/pr/1_Minus.png'
import favorit from '../assets/pr/2_favorit.png'
import waltz from '../assets/pr/3_Waltz.png'
import studz from '../assets/pr/4_StudZ.png'
import kaiser from '../assets/pr/5_Kaiser.png'
import junk from '../assets/pr/6_Junk.png'
import lasagna from '../assets/pr/7_lasagna.png'
import lsoe from '../assets/pr/8_LSOE.png'
import r from '../assets/pr/9_R.png'
import ruski from '../assets/pr/10_RuskiNurd.png'
import ImageGallery from 'react-image-gallery';
import '../css/PR.css';

// const hstyle = {
//     textAlign: "center",
//     fontFamily: "HKGroteskBold",
//     fontSize: "65px"
// };

const pr_images = [
    {
      original: minus
    },
    {
      original: favorit
    },
    {
      original: waltz
    },
    {
        original: studz
    },
    {
        original: kaiser
    },
    {
        original: junk
    },
    {
        original: lasagna
    },
    {
        original: lsoe
    },
    {
        original: r
    },
    {
        original: ruski
    },
];

const textstyle = {
    fontFamily: "Aclonica",
    color: "black"
}

export default class PR extends React.Component {
    render() {
        return (
            <div>
                    <h2 className='hstyle'>UT Power Rankings Fall 2019</h2>

                    <Container>
                        <Row>
                            <Col>
                                <Image src={prbanner} fluid></Image>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <h3>What are the UT Power Rankings?</h3>

                                <p>Every semester we rank the pr and it's fine and dandy and we should give a description here so that we can explain what it is.</p>

                                <h3>Who are these players?</h3>

                                <a href="#player_profiles">Get to know the players we've put on our PR!</a>
                                <p></p>

                                <h3>How are people determined to be on the UT PR?</h3>

                                <p>Attendance to tournaments, good results, and a panel system</p>

                                <h3>How do I get good enough to be on the PR?</h3>

                                <p>By attending tournaments, both here at UT and around Austin, and by practicing! Luckily, there are frequent meetups created to play other club members, which you can find out about through our **discord**</p>
                            </Col>
                        </Row>
                    </Container>

                    <section id="player_profiles">
                        <h2 className='hstyle mt-lg-5'>The Players</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <ImageGallery items={pr_images} style={{width: "80%", height: "80%"}}/>
                                </Col>
                            </Row>
                        </Container>
                        
                    </section>
                    
                    
                

                {/* <Carousel>
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
                </Carousel> */}
            </div>
        );
    }
}