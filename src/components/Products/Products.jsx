import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  // Checking we are getting array or object as data
  const productData = Array.isArray(products) ? products : products?.data || [];

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {productData.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};


export default Products;


// return (
//   <div className="products-container">
//     {!innerPage && <div className="sec-heading">{headingText}</div>}
//     <div className="products">
//       {Array.isArray(products) ? (
//         // If products is an array, directly map over it
//         products.map((item) => (
//           <Product key={item.id} id={item.id} data={item.attributes} />
//         ))
//       ) : (
//         // If products is an object, assume it has a 'data' property and map over it
//         products?.data?.map((item) => (
//           <Product key={item.id} id={item.id} data={item.attributes} />
//         ))
//       )}
//     </div>
//   </div>
// );