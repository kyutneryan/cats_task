const fetchCats = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CATS":
      return action.payload;
    default:
      return state;
  }
};
export default fetchCats;
