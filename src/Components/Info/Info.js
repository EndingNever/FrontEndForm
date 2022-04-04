import React from 'react'
import "./Info.css"
import { Col, Container, Row } from 'react-bootstrap'

export default function Info() {
    return (
        <Container className='info-container'>
            <Row>
                <Col>
                    <h1>
                        Learn to code by watching others
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </Col>
            </Row>
        </Container>
    )
}
