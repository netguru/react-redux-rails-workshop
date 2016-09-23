const restaurant = (state = null, action) => {
  switch (action.type) {
    case 'RESTAURANT_COMMENT_ADDED':
      if (state.id !== action.restaurantId) { return state; }

      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment,
        ]
      }
    default:
      return state;
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case 'LOAD_RESTAURANTS_SUCCESS':
      return action.restaurants;
    case 'RESTAURANT_COMMENT_ADDED':
      return state.map(r => restaurant(r, action));
    default:
      return state;
  }
};
