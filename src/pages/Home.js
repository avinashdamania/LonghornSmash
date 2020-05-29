import React from 'react'
import logo from '../assets/LS_Logo.png'
import ImageGallery from 'react-image-gallery';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import TournamentInfo from '../components/TournamentInfo'
import YouTube from 'react-youtube';

const youtube_video_opts = {
  height: '720',
  width: '1280'
};

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="Home" style={{height: "100vh"}}>
          <Container className="h-100">
            <Row>
              <Col style={{marginTop: "16em"}}>
                <div className="mx-auto">
                  {/* <h1 class="hstyle"> LONGHORN SMASH</h1> */}
                  <h2 class="h2style">Welcome to the website for UT Austin's official Competitive Super Smash Bros. Ultimate club!</h2>
                  <Button size="lg" style={{backgroundColor: "#010", border: "none"}} href="#second">See Upcoming Tournaments!</Button>
                </div>
                </Col>
              <Col style={{marginTop: "16em"}}>
                <div className="mx-auto text-center">
                  <img className='img-fluid' src={logo} alt={'logo'} style={{width: '60%'}}/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section id="second">
            <Container fluid>
              <Row>
                <Col>
                  <h2 class="tournament-headings text-center">Next Tournament</h2>
                </Col>
              </Row>
              <Row style={{paddingTop: "1em"}}>
                <Col>
                  <TournamentInfo/>
                </Col>
              </Row>
            </Container>
        </section>
        <section id="third">
          <Container fluid>
            <Row>
              <Col>
                <h2 class="video-heading text-center">See our highlights!</h2>
              </Col>
            </Row>
            <Row style={{marginTop: "2em"}}>
                <Col className="text-center">
                  <YouTube videoId={'WC3WtXONu34'} opts={youtube_video_opts}/>
                </Col>  
            </Row>    
          </Container>
        </section>
        <section id="fourth">
          <Container fluid>
            <Row>
              <Col>
                <h2 class="a-team-heading text-center">CSL A Team!</h2>
              </Col>
            </Row>
            <Row style={{marginTop: "2em"}}>
                <Col className="text-center">
                  <YouTube videoId={'R930gktTpcM'} opts={youtube_video_opts}/>
                </Col>  
            </Row>    
          </Container>
        </section>

      </div>
    );
  }
}