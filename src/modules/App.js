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

  return getAvailableBooks().then(books => {
    const mappedBooks = books.map(({ book }) => {
      const [base, exchange] = book.split('_');

      return {
        book,
        base,
        exchange,
      };
    });

    return dispatch({
      type: FETCH_AVAIL_BOOK_SUCCESS,
      availableBooks: mappedBooks,
    });
  });
};

const fetchTicker = book => dispatch => {
  dispatch({
    type: FETCH_TICKER_BOOK_INIT,
  });

  return getTicker(book);
};

export const fetchAvailableBooksWithTicker = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_TICKER_BOOK_INIT,
  });

  return dispatch(fetchAvailableBooks())
    .then(() => {
      const state = getState();

      // return Promise.all([dispatch(fetchTicker('btc_mxn')), dispatch(fetchTicker('eth_mxn'))]).then(
      //   x => {
      //     debugger;
      //   }
      // );
    })
    .then(x => {
      debugger;
    });
};

// export function loadAvailableBooks(themeType) {
//   return { type: APP_SWITCH_THEME, themeType };
// }

// Reducer
export default function reducer(
  state = {
    theme: 'dark',
    availableBooks: [],
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
      return {
        ...state,
        availableBooks: action.availableBooks,
      };
    }

    default:
      return state;
  }
}
