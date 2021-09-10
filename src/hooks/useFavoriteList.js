import { useState, useEffect } from 'react';
import axios from 'axios';
import { FAVORITES_LIST } from '../constants/BackendApi';

export default function useFavoriteList(type, posts) {
  const [list, setList] = useState([]);
  const [ids, setIds] = useState([]);

  const obj = localStorage.getItem('user');
  if (!obj) return false;
  const { id, token } = JSON.parse(obj);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios({ method: 'get', url: FAVORITES_LIST(id), headers: { Authorization: token } });
      const listOfIds = res.data.data
        .filter((item) => item.type === type)
        .map((item) => item.favorited);
      setIds(listOfIds);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const favorites = posts.filter((item) => ids.includes(item.id.toString()));
    setList(favorites);
  }, [posts]);

  return list;
}
