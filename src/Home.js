import React from 'react'
import logo from './assets/LS_Logo.png'
import tp1 from './assets/tp1.jpg'
import tp2 from './assets/tp2.jpg'
import tp3 from './assets/tp3.jpg'
import ImageGallery from 'react-image-gallery';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';


const images = [
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

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="Home" style={{height: "100vh"}}>
          <Container className="h-100">
            <Row className="h-100">
              <Col style={{marginTop: "16em"}}>
                <div className="mx-auto">
                  {/* <h1 class="hstyle"> LONGHORN SMASH</h1> */}
                  <h2 class="h2style">Welcome to the website for UT Austin's official Competitve Super Smash Bros. Ultimate club!</h2>
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
        <section id="second" style={{marginTop: "20em"}}>
          <ImageGallery items={images} />
        </section>
      </div>
      
    //   <div style={{
    //     backgroundColor: '#000000', width: '100%',
    //     height: '100%'}}>

    //     <h2 class="hstyle"> LONGHORN SMASH</h2>

    //     <div style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: '20px'
    //     }}>
    //         <Image src={logo} fluid width='50%' />
    //     </div>
    //     <br></br>

    //     <p>
    //       Welcome to UT Austin's official Smash Ultimate club!
        // </p>
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop: '10px'
    //     }}>
        
    //     </div> 
    // </div>
    );
  }
}