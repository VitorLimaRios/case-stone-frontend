import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Header, SimpleCard } from '../components';
import useFavoriteList from '../hooks/useFavoriteList';
import useFetchData from '../hooks/useFetchData';
import { CHARACTER_URL } from '../constants/MarvelAPI';

export default function FavoriteCharacters() {
  const {
    posts,
    loading,
  } = useFetchData(CHARACTER_URL);

  const list = useFavoriteList('character', posts);

  const rederCards = () => (
    (loading) ? <h1>Loading...</h1>
      : list.map((item) => <SimpleCard key={item.id} type="characters" data={item} />)
  );

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-center p-4">
          { (list)
            ? rederCards()
            : <h1>NEED TO LOGIN</h1>}
        </Row>
      </Container>
    </>
  );
}
