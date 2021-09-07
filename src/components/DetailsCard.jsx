import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';

export default function SimpleCard(props) {
  const {
    data: {
      // id,
      name,
      title,
      description,
      characters,
      comics,
      stories,
      events,
      thumbnail: { path, extension },
    },
  } = props;

  const [favorited, setFavorited] = useState(false);

  const favorite = () => {
    if (favorited) {
      setFavorited(false);
    } else {
      setFavorited(true);
    }
  };

  const imgStyle = {
    width: '100%',
  };

  return (
    <Container>
      <Row className="bg-secondary bg-opacity-50 m-5 border border-success border-2 rounded text-white">
        <Col className="justify-content-center p-3">
          <Image src={`${path}/detail.${extension}`} style={imgStyle} rounded />
        </Col>
        <Col className="justify-content-center p-3">
          <h3>{name || title}</h3>
          <p>{description}</p>
          <h6>{(characters) ? `Characters: ${characters.available}` : `Comics: ${comics.available}`}</h6>
          <h6>{`Stories: ${stories.available}`}</h6>
          <h6>{`Events: ${events.available}`}</h6>
          <Button onClick={() => favorite()}>
            {(favorited) ? 'Unfavorite' : 'Favorite'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

SimpleCard.propTypes = {
  data: PropTypes.shape({
    // id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    comics: PropTypes.arrayOf(PropTypes.object).isRequired,
    stories: PropTypes.arrayOf(PropTypes.object).isRequired,
    events: PropTypes.arrayOf(PropTypes.object).isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
