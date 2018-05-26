import { getAvailableBooks } from '../api';

const APP_SWITCH_THEME = 'APP_SWITCH_THEME';
const FETCH_AVAIL_BOOK_INIT = 'FETCH_AVAIL_BOOK_INIT';
const FETCH_AVAIL_BOOK_SUCCESS = 'FETCH_AVAIL_BOOK_SUCCESS';
const FETCH_AVAIL_BOOK_FAILURE = 'FETCH_AVAIL_BOOK_FAILURE';

// Action Creators
export const changeTheme = themeType => {
  return { type: APP_SWITCH_THEME, themeType };
};

export const fetchAvailableBooks = () => dispatch => {
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

// export const loadTicker = (book = dispatch => {});

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
