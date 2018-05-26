import { getAvailableBooks, getTicker } from '../api';

const APP_SWITCH_THEME = 'APP_SWITCH_THEME';

const FETCH_AVAIL_BOOK_INIT = 'FETCH_AVAIL_BOOK_INIT';
const FETCH_AVAIL_BOOK_SUCCESS = 'FETCH_AVAIL_BOOK_SUCCESS';
const FETCH_AVAIL_BOOK_FAILURE = 'FETCH_AVAIL_BOOK_FAILURE';

const FETCH_TICKER_BOOK_INIT = 'FETCH_TICKER_BOOK_INIT';
const FETCH_TICKER_BOOK_SUCCESS = 'FETCH_TICKER_BOOK_SUCCESS';
const FETCH_TICKER_BOOK_FAILURE = 'FETCH_TICKER_BOOK_FAILURE';

const FETCH_ALL_BOOKS_TICKER_INIT = 'FETCH_ALL_BOOKS_TICKER_INIT';
const FETCH_ALL_BOOKS_TICKER_SUCCESS = 'FETCH_ALL_BOOKS_TICKER_SUCCESS';
const FETCH_ALL_BOOKS_TICKER_FAILURE = 'FETCH_ALL_BOOKS_TICKER_FAILURE';

// Action Creators
export const changeTheme = themeType => {
  return { type: APP_SWITCH_THEME, themeType };
};

const fetchAvailableBooks = () => dispatch => {
  dispatch({
    type: FETCH_AVAIL_BOOK_INIT,
  });

  return getAvailableBooks().then(availableBooks =>
    dispatch({
      type: FETCH_AVAIL_BOOK_SUCCESS,
      availableBooks,
    })
  );
};

const fetchTicker = book => dispatch => {
  dispatch({
    type: FETCH_TICKER_BOOK_INIT,
  });

  return getTicker(book).then(ticker =>
    dispatch({
      type: FETCH_TICKER_BOOK_SUCCESS,
      ticker,
    })
  );
};

export const fetchAvailableBooksWithTicker = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_ALL_BOOKS_TICKER_INIT,
  });

  return dispatch(fetchAvailableBooks())
    .then(() => {
      const state = getState();

      return Promise.all(state.App.availableBooks.map(book => dispatch(fetchTicker(book))));
    })
    .then(() => {
      return dispatch({
        type: FETCH_ALL_BOOKS_TICKER_SUCCESS,
      });
    });
};

// export function loadAvailableBooks(themeType) {
//   return { type: APP_SWITCH_THEME, themeType };
// }

// Reducer
export default function reducer(
  state = {
    theme: 'dark',
    selectedBook: 'btc_mxn',
    isLoading: true,
    availableBooks: [],
    books: {},
  },
  action = {}
) {
  switch (action.type) {
    // do reducer stuff
    case APP_SWITCH_THEME: {
      return {
        ...state,
        theme: action.themeType,
      };
    }

    case FETCH_AVAIL_BOOK_SUCCESS: {
      const { availableBooks } = action;
      let books = {};
      let availBook = [];

      const mappedBooks = availableBooks.forEach(bookItem => {
        books = {
          ...books,
          [bookItem.book]: {
            ...bookItem,
          },
        };
        availBook = [...availBook, bookItem.book];
      });

      return {
        ...state,
        availableBooks: availBook,
        books,
      };
    }
    case FETCH_TICKER_BOOK_SUCCESS: {
      const { ticker } = action;

      return {
        ...state,
        books: {
          ...state.books,
          [ticker.book]: {
            ...state.books[ticker.book],
            ...ticker,
          },
        },
      };
    }

    case FETCH_ALL_BOOKS_TICKER_INIT: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_ALL_BOOKS_TICKER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
