import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category ? category.toUpperCase() : "ALL"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="for" onChange={handleFilters}>
            <Option disabled>For (Age)</Option>
            <Option value="all">All</Option>
            <Option value="infant">Infant (0-12 Mon)</Option>
            <Option value="toddler">Toddler (1-5 Y)</Option>
            <Option value="kids">Kids (5-12 Y)</Option>
            <Option value="teenager">Teenager (12-19 Y)</Option>
            <Option value="adults">Adult ( &gt; 19)</Option>
          </Select>
          <Select name="usage" onChange={handleFilters}>
            <Option disabled>Usage</Option>
            <Option value="all">All</Option>
            <Option value="health care">Health care</Option>
            <Option value="good nutrition">Good nutritions</Option>
            <Option value="hygienic">Hygienic</Option>
            <Option value="skin care">Skin care</Option>
            <Option value="hair care">Hair care</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="price asc">Price (asc)</Option>
            <Option value="price desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
