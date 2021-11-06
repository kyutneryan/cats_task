import styled from "styled-components";

export const CategoriesList = styled.ul`
  padding: 20px;
  list-style-type: none;
`;

export const Button = styled.button`
  background: #3399ff;
  width: 150px;
  border-radius: 3px;
  border: 2px solid #3399ff;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const Categories = styled.div`
  width: 300px;
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Col1 = styled.div`
  float: left;
  width: 30%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Col2 = styled.div`
  float: left;
  width: 70%;

  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 26%;
  margin: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Cats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
