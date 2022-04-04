import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'bootstrap'
import "./TryButton.css"

export default function TryButton() {
  return (
    <Container>
      <Row>
        <Col>
          <button>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </button>
        </Col>
      </Row>
    </Container>
  )
}
