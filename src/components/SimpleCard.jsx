import React from 'react';
import PropTypes from 'prop-types';
import { Card, InputGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function SimpleCard(props) {
  const {
    type,
    data: {
      id, name, title, thumbnail: { path, extension },
    },
  } = props;

  const history = useHistory();

  return (
    <Card
      style={{ width: '15rem' }}
      className="m-2"
    >
      <Card.Img
        variant="top"
        style={{ height: '20rem' }}
        src={`${path}/portrait_xlarge.${extension}`}
      />
      <Card.Body>
        <Card.Title>{ name || title }</Card.Title>
        <InputGroup className="mb-3">
          <Button
            variant="primary"
            onClick={() => history.push(`/${type}/${id}`)}
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
