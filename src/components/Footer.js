import React from 'react';
import { Container, Row, Col, Label, Input, Button, Form } from 'reactstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col md='3'>
          <h5>Customer Support</h5>
          <ul className='list-unstyled'>
            <li>Email Us</li>
            <li>Order Status</li>
            <li>Returns & Exchanges</li>
            <li>Store Finder</li>
            <li>Customer Service</li>
          </ul>
        </Col>
        <Col md='2'>
          <h5>Account</h5>
          <ul className='list-unstyled'>
            <li>Log In</li>
            <li>Create Account</li>
            <li>Gift Cards & Rewards</li>
          </ul>
        </Col>
        <Col md='2'>
          <h5>Shop</h5>
          <ul className='list-unstyled'>
            <li>Shoes</li>
            <li>Sneakers</li>
            <li>Slides</li>
            <li>Boots</li>
            <li>Sandals</li>
            <li>Slippers</li>
          </ul>
        </Col>
        <Col>
          <h5>Embrace Your Personality</h5>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-facebook" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-youtube-play" />
          </a>{" "}
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <div>
            <h4>Sign Up For Emails & Get 10% Off</h4>
            <Form>
              <Label className='visually-hidden' for='email'>Email</Label>
              <Input type='email' id='email' name='email' placeholder='Enter your email address...' className='float-start' />
              <Button>SUBMIT</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;








