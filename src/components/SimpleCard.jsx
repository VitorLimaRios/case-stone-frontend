import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function SimpleCard(props) {
  const {
    type,
    data: {
      id, name, thumbnail: { path },
    },
  } = props;

  const history = useHistory();

  const cardStyle = {
    width: '18rem',
  };

  return (
    <Card
      style={cardStyle}
      className="m-2"
    >
      <Card.Img
        variant="top"
        src={path}
      />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <InputGroup className="mb-3">
          <Button
            variant="primary"
            onClick={history.push(`/${type}/${id}`)}
          >
            Know More
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

SimpleCard.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
