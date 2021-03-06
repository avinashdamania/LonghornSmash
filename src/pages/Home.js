import React from 'react'
import logo from '../assets/LS_Logo.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Home.css';
import TournamentInfo from '../components/TournamentInfo'
import ResponsivePlayer from '../components/ResponsivePlayer'

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="Home">
          <Container>
            <Row className="pt-5">
              <Col>
                <h2 class="h2style">Welcome to the website for UT Austin's official Competitive Super Smash Bros. Ultimate club!</h2>
                <Button size="lg" style={{backgroundColor: "#010", border: "none"}} href="#second">See Upcoming Tournaments!</Button>
              </Col>
              {/* <Col>
                <div className="text-center">
                  <img className='img-fluid' src={logo} alt={'logo'} style={{width: '60%'}}/>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div id="second">
            <Container fluid style={{backgroundColor: "gainsboro"}}>
              <Row>
                <Col>
                  <h2 class="tournament-headings text-center">Next Tournament</h2>
                  <TournamentInfo/>
                </Col>
                <Col>
                <div id="second">
                  <h2 class="video-heading text-center">See our highlights!</h2>
                  <ResponsivePlayer url={'https://www.youtube.com/watch?v=WC3WtXONu34'}/>
                  <h2 class="a-team-heading text-center">CSL A Team!</h2>
                <ResponsivePlayer url={"https://www.youtube.com/watch?v=R930gktTpcM"} />
                </div>
                </Col>
              </Row>
      
     
              
            </Container>
        </div>
      

      </div>
    );
  }
}