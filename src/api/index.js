import axios from 'axios';

import { API_URL } from './config';

const handleSuccess = response => response.data.payload;

export const getAvailableBooks = () => axios.get(`${API_URL}/available_books/`).then(handleSuccess);

export const getTicker = () => axios.get(`${API_URL}/ticker/`);
