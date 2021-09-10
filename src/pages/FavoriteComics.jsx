import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Header, SimpleCard } from '../components';
import useFavoriteList from '../hooks/useFavoriteList';
import useFetchData from '../hooks/useFetchData';
import { COMIC_URL } from '../constants/MarvelAPI';

export default function FavoriteComics() {
  const {
    posts,
    loading,
  } = useFetchData(COMIC_URL);

  const list = useFavoriteList('comic', posts);

  const rederCards = () => (
    (loading) ? <h1>Loading...</h1>
      : list.map((item) => <SimpleCard key={item.id} type="comics" data={item} />)
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
