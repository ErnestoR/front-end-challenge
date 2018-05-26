import { getAvailableBooks } from '../api';

const APP_SWITCH_THEME = 'APP_SWITCH_THEME';

// Action Creators
export const changeTheme = themeType => {
  return { type: APP_SWITCH_THEME, themeType };
};

export const loadAvailableBooks = () => dispatch => {
  // dispatch({});

  return getAvailableBooks().then(data => {
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

    default:
      return state;
  }
}
