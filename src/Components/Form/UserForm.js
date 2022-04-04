import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Form.css"
import { FormControl, FormGroup, FormLabel, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function UserForm() {
  return (
    <Container className="userform-container">
      <Row className='userform-container-row'>
        <Col className='userform-container-col'>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicFirstName'>
              {/* <Form.Label>First Name</Form.Label> */}
              <Form.Control type='First Name' placeholder='First Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLastName'>
              {/* <Form.Label>Last Name</Form.Label> */}
              <Form.Control type='Last Name' placeholder='Last Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control type="email" placeholder='Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button className='button userform-btn mb-3 mt-3'>CLAIM YOUR FREE TRIAL</Button>
            <p className=' ps-2 pe-2 by-clicking'>By clicking the button, you are agreeing to our <span className='terms'>Terms and Services</span></p>
          </Form>
         </Col>
       </Row>
     </Container>
  )
}
