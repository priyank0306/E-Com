import axios from "axios";
import { useEffect, useState } from "react";
// import generalProducts from "../datamed";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const baseURL = process.env.REACT_APP_BASE_URL;

// console.log(process.env);
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        // console.log(category);
        const { data } = await axios.get(
          category
            ? `${baseURL}products?category=${category}`
            : `${baseURL}products`
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(
            ([key, value]) => item[key].search(value) !== -1
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt))
      );
    } else if (sort === "price asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "price desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => (
            <Product item={item} key={item.productId} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
