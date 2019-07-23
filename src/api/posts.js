// npm packages
import axios from 'axios';
import { REDDIT_API } from '../config.json';

export const getPosts = (after) => {
  let query = '';
  if (after) {
    query = `after=${after}`;
  }
  return axios.get(`${REDDIT_API}?${query}&limit=5`);
};
