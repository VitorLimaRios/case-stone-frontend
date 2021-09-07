import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Forms, SubmitButton, RedirectButton } from '../components';

function Register() {
  return (
    <Container>
      <Row
        className="mt-5 justify-content-center"
      >
        <Col className="col" md={{ span: 6 }}>
          <Forms username useremail userpassword />
          <div className="d-grid gap-2">
            <SubmitButton text="Create Account" API_URL path="/characters" />
            <RedirectButton text="Return to login page" path="/login" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
