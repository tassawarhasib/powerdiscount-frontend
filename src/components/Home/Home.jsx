import { useEffect, useContext, useState } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Shimmer from "../Shimmer/Shimmer";

const Home = () => {

  const { categories, setCategories, products, setProducts } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getProducts();
      getCategories();
      setLoading(false);
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res.data);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res.data);
    });
  };

  return (
    <div>
      <Banner />

      {loading ? (
        <div className="main-content">
          <div className="layout">
            {/* <h1>Loading.....</h1> */}
            <Shimmer />
          </div>
        </div>
      ) : (

        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
