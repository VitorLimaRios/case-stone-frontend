import React from 'react';
import PropTypes from 'prop-types';
import { Header, DetailsCard } from '../components';
import useFetchData from '../hooks/useFetchData';
import { CHARACTER_ID_URL } from '../constants/MarvelAPI';

export default function CharacterDetails(props) {
  const { match: { params: { id } } } = props;

  const {
    posts,
    loading,
  } = useFetchData(CHARACTER_ID_URL(id));

  return (
    <>
      <Header />
      { loading ? <h1>Loading...</h1>
        : posts.map((item) => <DetailsCard key={item.id} data={item} />) }
    </>
  );
}

CharacterDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
