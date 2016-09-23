const sampleRestaurants = [
  {
    id: 1,
    name: 'Test #1',
    address: 'Testowy address',
  },
  {
    id: 2,
    name: 'Test #2',
    address: 'Testowy address #2',
  },
]

export default (state = sampleRestaurants, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
