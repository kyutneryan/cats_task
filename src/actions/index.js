export function fetchCats(data) {
  return {
    type: "FETCH_CATS",
    payload: data,
  };
}

export function fetchCategories(data) {
  return {
    type: "FETCH_CATEGORIES",
    payload: data,
  };
}
