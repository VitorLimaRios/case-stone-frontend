import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  Forms, SubmitButton, RedirectButton, Header,
} from '../components';
import { UPDATE_USER_URL } from '../constants/BackendApi';

export default function UserDetails() {
  const obj = localStorage.getItem('user');
  const id = (obj) ? JSON.parse(obj).id : false;

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5 justify-content-center">
          <Col
            className="bg-secondary bg-opacity-50 p-3 border border-success border-2 rounded text-white"
            md={{ span: 6 }}
          >
            <h3>Change user info</h3>
            <Forms username useremail userpassword />
            <div className="d-grid gap-2">
              <SubmitButton text="Change account data" API_URL={UPDATE_USER_URL(id)} methodHTTP="put" />
              <RedirectButton text="See Favorite Comics" path="/user/comics" />
              <RedirectButton text="See Favorite Characters" path="/user/characters" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
