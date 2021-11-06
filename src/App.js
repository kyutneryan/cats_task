import { useState, useEffect } from "react";
import "./Styles.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchCats } from "./actions";
import {
  Button,
  Card,
  Categories,
  CategoriesList,
  Cats,
  Col1,
  Col2,
  Row,
} from "./Styles.js";

const App = () => {
  const [selectedItem, setSelectedItem] = useState({ id: 1 });

  const cats = useSelector((state) => state.cats);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${selectedItem.id}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchCats(data)));
  }, [selectedItem]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories")
      .then((response) => response.json())
      .then((data) => dispatch(fetchCategories(data)));
  });

  function onLoadMore() {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${selectedItem.id}`
    )
      .then((response) => response.json())
      .then((data) => dispatch(fetchCats([...cats, ...data])));
  }

  return (
    <Row>
      <Col1>
        <div>
          <h2>Categories</h2>
          <Categories>
            <CategoriesList>
              {categories.map((item) => {
                return (
                  <li key={item.id}>
                    <Button onClick={() => setSelectedItem(item)}>
                      {item.name}
                    </Button>
                  </li>
                );
              })}
            </CategoriesList>
          </Categories>
        </div>
      </Col1>

      <Col2>
        <h2>Cats</h2>
        <Cats>
          {cats.map((item) => {
            return (
              <Card key={item.id}>
                <img
                  src={item.url}
                  alt="Avatar"
                  style={{ width: "100%", height: 300 }}
                />
              </Card>
            );
          })}
        </Cats>

        <Button onClick={onLoadMore}>Load More</Button>
      </Col2>
    </Row>
  );
};

export default App;
