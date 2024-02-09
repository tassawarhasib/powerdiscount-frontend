import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Elevate Your Lifestyle with Premium Accessories</h1>
          <p>
            Discover our selection of high-quality accessories best suited for quality lovers and Gen-Z. Enjoy crystal-clear sound and ergonomic designs with our wide range of products. Shop now and upgrade your experience.
          </p>
          <div className="ctas">
            <div className="banner-cta">View Products</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
