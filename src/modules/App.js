// Reducer
export default function reducer(
  state = {
    theme: 'dark',
  },
  action = {}
) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
