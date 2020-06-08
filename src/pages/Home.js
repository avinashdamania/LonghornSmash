import React from 'react'
import logo from '../assets/LS_Logo.png'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import '../css/Home.css';
import TournamentInfo from '../components/TournamentInfo'
import ResponsivePlayer from '../components/ResponsivePlayer'
import facebook_icon from '../assets/icons/facebook.png'
import twitter_icon from '../assets/icons/twitter.png'
import discord_icon from '../assets/icons/discord.png'
import twitch_icon from '../assets/icons/twitch.png'
import hornslink_icon from '../assets/icons/longhorn.png'

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="Home">
          <Container>
            <Row className="pt-5">
              <Col>
                <h2 class="h2style">Welcome to Longhorn Smash!</h2>
                <Button size="lg" style={{backgroundColor: "#010", border: "none"}} href="#second">See Upcoming Tournaments!</Button>
              </Col>
              
            </Row>

            <Row style={{position: "absolute", bottom: "35vh"}}>
              <a href="//facebook.com/groups/ATXSm4sh" target="_blank"><Image style = {{height: "5vh", width: "5vh", margin: "1vh"}} src={facebook_icon}></Image></a>
              <a href="//twitter.com/LonghornSmash" target="_blank"><Image style = {{height: "5vh", width: "5vh", margin: "1vh"}} src={twitter_icon}></Image></a>
              <a href="//discord.gg/En7SWs" target="_blank"><Image style = {{height: "5vh", width: "5vh", margin: "1vh"}} src={discord_icon}></Image></a>
              <a href="//twitch.tv/longhornsmash" target="_blank"><Image style = {{height: "5vh", width: "5vh", margin: "1vh"}} src={twitch_icon}></Image></a>
              <a href="//utexas.campuslabs.com/engage/organization/cgc" target="_blank"><Image style = {{height: "5vh", width: "5vh", margin: "1vh"}} src={hornslink_icon}></Image></a>
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
      
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> as well as https://www.iconfinder.com/icons/4263120/animal_bull_cattle_cow_farm_head_longhorn_icon</div>
      </div>
    );
  }
}