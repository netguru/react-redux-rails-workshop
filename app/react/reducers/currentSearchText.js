export default (state = 'DUPA', action) => {
  switch (action.type) {
    case 'ON_SEARCH_CHANGE':
      return action.value;
    default:
      return state;
  }
};
