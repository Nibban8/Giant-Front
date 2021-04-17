const reducer = (parts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...parts, action.payload];
    default:
      return parts;
  }
};

export default reducer;
