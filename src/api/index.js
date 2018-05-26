import axios from 'axios';

import { API_URL, TICKER_API_URL_THAT_DOESNT_SHIT_THE_BED } from './config';

const handleSuccess = response => response.data.payload;

export const getAvailableBooks = () => axios.get(`${API_URL}/available_books/`).then(handleSuccess);

export const getTicker = book =>
  axios
    .get(TICKER_API_URL_THAT_DOESNT_SHIT_THE_BED, {
      params: {
        book,
      },
    })
    .then(handleSuccess);
