import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Forms, SubmitButton, RedirectButton } from '../components';

function Login() {
  return (
    <Container>
      <Row
        className="mt-5 justify-content-center"
      >
        <Col className="col" md={{ span: 6 }}>
          <Forms username={false} useremail userpassword />
          <div className="d-grid gap-2">
            <SubmitButton text="Login" API_URL path="/characters" />
            <RedirectButton text="Register" path="/register" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
