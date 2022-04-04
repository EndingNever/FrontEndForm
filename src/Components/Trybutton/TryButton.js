import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import "./TryButton.css"

import 'bootstrap/dist/css/bootstrap.min.css';


export default function TryButton() {
  return (
    <Container className='trybutton-container'>
      <Row className='trybutton-row'>
        <Col className='trybutton-col'>
          <Button className="button trybtn-btn">
              <strong>Try it free 7 days</strong>
              then $20/mo. thereafter
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
