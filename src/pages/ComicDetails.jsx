import React from 'react';
import PropTypes from 'prop-types';
import { Header, DetailsCard } from '../components';
import useFetchData from '../hooks/useFetchData';
import { COMIC_ID_URL } from '../constants/MarvelAPI';

export default function ComicDetails(props) {
  const { match: { params: { id } } } = props;

  const {
    posts,
    loading,
  } = useFetchData(COMIC_ID_URL(id));

  return (
    <>
      <Header />
      { loading ? <h1>Loading...</h1>
        : posts.map((item) => <DetailsCard key={item.id} data={item} />) }
    </>
  );
}

ComicDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
