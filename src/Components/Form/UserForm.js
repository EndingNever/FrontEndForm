import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Form.css"
import { FormControl, FormGroup, FormLabel, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';

export default function UserForm() {
  const firstName = useRef('')
  const lastName = useRef('')
  const userEmail = useRef('')
  const userPassword = useRef('')
  const [empty,setEmpty] = useState(false);


  const handleSubmit = (e) => {
    if (firstName.current.value == '' || lastName.current.value == '' || userEmail.current.value == '' || userPassword.current.value == '') {
      setEmpty(true);
      console.log(empty)
      e.preventDefault();
    }
    else {
      setEmpty(false);
      alert("Thank you for signing up, " + `${firstName.current.value} ${lastName.current.value}!`)
    }
  }
  return (
    <Container className="userform-container ">
      <Row className='userform-container-row'>
        <Col className='userform-container-col'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicFirstName'>
              {/* <Form.Label>First Name</Form.Label> */}
              <Form.Control ref={firstName} type='First Name' placeholder='First Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicLastName'>
              {/* <Form.Label>Last Name</Form.Label> */}
              <Form.Control ref={lastName} type='Last Name' placeholder='Last Name' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control ref={userEmail} type="email" placeholder='Email' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control ref={userPassword} type='password' placeholder='Password' />
            </Form.Group>
            <Button className='button userform-btn mb-3 mt-3' type='submit'>CLAIM YOUR FREE TRIAL</Button>
            <p className=' ps-2 pe-2 by-clicking'>By clicking the button, you are agreeing to our <span className='terms'>Terms and Services</span></p>
            <div style={{color:"red"}}>
              {empty===true?<h2 className='shake'>PLEASE FILL OUT ALL FIELDS</h2> : null}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
