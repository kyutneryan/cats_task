import fetchCategories from "./fetchCategories";
import fetchCats from "./fetchCats";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cats: fetchCats,
  categories: fetchCategories,
});

export default allReducers;
