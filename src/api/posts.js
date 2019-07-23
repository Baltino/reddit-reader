// npm packages
import axios from 'axios';
import { REDDIT_API } from '../config.json';

export const getPosts = name => axios.get(`${REDDIT_API}?`);
