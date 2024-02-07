import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  // console.log("Product data: ", attributes);
  return (
    <div className="product-card" onClick={()=> navigate("/product/"+id)}>
      <div className="thumbnail">
        <img src={data.img.data[0].attributes.url} alt="" />
      </div>

      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;


// const Product = ({id, data}) => {
//   return (
//     <div className="product-card">
//       <div className="thumbnail">
//         <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
//       </div>

//       <div className="prod-details">
//         <span className="name">Product name</span>
//         <span className="price">&#8377;499</span>
//       </div>
//     </div> 
//   );
// };
// export default Product;
