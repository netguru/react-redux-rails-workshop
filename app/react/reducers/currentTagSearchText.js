export default (state = '', action) => {
  switch (action.type) {
    case 'ON_TAG_SEARCH_CHANGE':
      return action.value;
    default:
      return state;
  }
};
