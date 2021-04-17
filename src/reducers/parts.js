const reducer = (parts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return parts;
    default:
      return parts;
  }
};

export default reducer;
