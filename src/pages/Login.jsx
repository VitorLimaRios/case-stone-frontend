import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Forms, SubmitButton, RedirectButton } from '../components';
import { LOGIN_URL } from '../constants/BackendApi';

export default function Login() {
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col
          className="bg-secondary bg-opacity-50 p-3 border border-success border-2 rounded text-white"
          md={{ span: 6 }}
        >
          <Forms username={false} useremail userpassword />
          <div className="d-grid gap-2">
            <SubmitButton text="Login" API_URL={LOGIN_URL} methodHTTP="post" />
            <RedirectButton text="Register" path="/register" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
