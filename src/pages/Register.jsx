import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Forms, SubmitButton, RedirectButton } from '../components';
import { REGISTER_URL } from '../constants/BackendApi';

export default function Register() {
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col
          className="bg-secondary bg-opacity-50 p-3 border border-success border-2 rounded text-white"
          md={{ span: 6 }}
        >
          <Forms username useremail userpassword />
          <div className="d-grid gap-2">
            <SubmitButton text="Create Account" API_URL={REGISTER_URL} methodHTTP="post" />
            <RedirectButton text="Return to login page" path="/login" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
