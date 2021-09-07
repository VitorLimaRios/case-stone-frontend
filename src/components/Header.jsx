import React from 'react';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  const obj = localStorage.getItem('user');
  const name = (obj) ? JSON.parse(obj).name : 'NO NAME';

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <Navbar className="bg-secondary bg-opacity-75" variant="dark">
      <Container>
        <Navbar.Brand>CASE STONE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => history.push('/comics')}
            className="bg-success bg-opacity-90 m-2"
          >
            Comics
          </Nav.Link>
          <Nav.Link
            onClick={() => history.push('/characters')}
            className="bg-success bg-opacity-90 m-2"
          >
            Characters
          </Nav.Link>
          <Nav.Link
            onClick={() => history.push('/user-details')}
            className="bg-success bg-opacity-90 m-2"
          >
            { name }
          </Nav.Link>
          <Nav.Link
            onClick={() => logout()}
            className="bg-danger bg-opacity-90 m-2"
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
