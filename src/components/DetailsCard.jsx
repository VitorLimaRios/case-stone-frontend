import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { ADD_FAVORITE, UNFAVORITE, FAVORITES_LIST } from '../constants/BackendApi';

export default function DetailsCard(props) {
  const {
    data: {
      id,
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

  const type = (characters) ? 'comic' : 'character';

  const [favorited, setFavorited] = useState(false);

  const obj = localStorage.getItem('user');
  const userid = (obj) ? JSON.parse(obj).id : false;
  const token = (obj) ? JSON.parse(obj).token : false;

  useEffect(() => {
    const fetchList = async () => {
      if (userid && token) {
        const res = await axios({ method: 'get', url: FAVORITES_LIST(userid), headers: { Authorization: token } });
        const isFavorited = res.data.data
          .filter((item) => item.type === type)
          .some((item) => item.favorited === id.toString());
        setFavorited(isFavorited);
      }
    };
    fetchList();
  }, []);

  const favorite = async () => {
    if (userid && token) {
      if (favorited) {
        setFavorited(false);
        await axios({
          method: 'delete',
          url: UNFAVORITE(id),
          headers: { Authorization: token },
        });
      } else {
        setFavorited(true);
        await axios({
          method: 'post',
          url: ADD_FAVORITE,
          data: { favorited: id.toString(), userid: userid.toString(), type },
          headers: { Authorization: token },
        });
      }
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
          <p>{`Description: ${description || 'No description given'}`}</p>
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

DetailsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    characters: PropTypes.shape(),
    comics: PropTypes.shape(),
    stories: PropTypes.shape().isRequired,
    events: PropTypes.shape().isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
