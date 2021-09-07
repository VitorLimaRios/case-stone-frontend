import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Header, SimpleCard, PaginationOrder } from '../components';
import useFetchData from '../hooks/useFetchData';
import { CHARACTER_URL } from '../constants/MarvelAPI';

export default function Characters() {
  const {
    posts,
    loading,
    currentPage,
    postsPerPage,
    currentPosts,
    paginate,
  } = useFetchData(CHARACTER_URL);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-center p-4">
          { loading ? <h1>Loading...</h1>
            : currentPosts.map((item) => <SimpleCard key={item.id} type="character" data={item} />) }

        </Row>
        <Row sm="auto" className="justify-content-center p-4">
          <PaginationOrder
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </Row>
      </Container>
    </>
  );
}
