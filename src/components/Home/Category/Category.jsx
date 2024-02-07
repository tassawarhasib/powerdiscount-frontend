import { useNavigate } from 'react-router-dom';

import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
// import { useEffect, useState } from "react";

const Category = ({ categories }) => {

  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((item) => (item.attributes.img.data.map((imgItem) => (
          <div className="category" key={imgItem} onClick={() => navigate(`/category/${item.id}`)} >
            <img src={imgItem.attributes.url} alt="categories image" />
          </div>
        )
        )))}
      </div>

      {/* <div className="categories">
        {console.log(categories)}
        {categories.data.map((item) => (
          <div key={item.id} className="category">
            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
          </div>
        ))}
      </div> */}

    </div >
  );
};




export default Category;