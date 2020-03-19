import React from 'react'
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import "../css/TournamentInfo.css"
import sds_slide from "../assets/sds_slide.jpg"

export default class TournamentInfo extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    {/* <Row className="p-3">
                        <Col>
                            We host weekly tournaments called SD Sundays every Sunday. Here you can find information about the location, date, and how to signup.
                            Unfortunately, due to the recent situation regarding the Corona Virus, all upcoming tournaments have been cancelled until further notice. 
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <Image src={sds_slide} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{backgroundColor: "green", margin: "2em", padding: "2em"}}>
                            <h2 className="box-heading">Next Tournament: <span className="date">Date</span></h2>
                            <Button size="lg" style={{backgroundColor: "#010", border: "none"}}>Sign up here!</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}