import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class TournamentInfo extends React.Component {
    render() {
        return (
            <div>
                <Container style={{backgroundColor: 'white'}}>
                    <Row className="p-3">
                        <Col>
                            We host weekly tournaments called SD Sundays every Sunday. Here you can find information about the location, date, and how to signup.
                            Unfortunately, due to the recent situation regarding the Corona Virus, all upcoming tournaments have been cancelled until further notice. 
                        </Col>
                    </Row>
                    {/* <Row className="p-3">
                        <Col>
                            Tournament Name:
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            Tournament Location:
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            Tournament Date:
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            Link
                        </Col>
                    </Row> */}
                </Container>
            </div>
        )
    }
}