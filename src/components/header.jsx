import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Header = (props) => {
  const settings = {
 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds
  };

  return (




    <header id="header" >
      <Slider {...settings}>
        {/* Add your carousel slides here */}
        <div className="slide">
          <img src="https://i.ibb.co/68ZpdK9/agency2.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://i.ibb.co/phg9rW8/agency3.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://i.ibb.co/zQ3JjRc/agency1.png" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
            <h1 style={{ color: "#fff", textShadow: "2px 2px 4px #000", fontSize: "3rem" }}>
  {props.data ? props.data.title : "Loading"}
  <span></span>
</h1>
<p style={{ color: "#fff", textShadow: "1px 1px 2px #000", fontSize: "1.5rem" }}>
  {props.data ? props.data.paragraph : "Loading"}
</p>

              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                Learn More
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
