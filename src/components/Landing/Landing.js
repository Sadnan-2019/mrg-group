import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
const Landing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    autoplay: "true",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="  px-7 py-7 ">
        <Slider {...settings}>
          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://scontent.fdac120-1.fna.fbcdn.net/v/t39.30808-6/311251970_549516216978270_1197917916719729489_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jHvKrEhn1PoAX_GMhEu&_nc_ht=scontent.fdac120-1.fna&oh=00_AT_EZCtusOwiQIteVq7I3BgUDs8CdjwViji_ySiSK2OsNQ&oe=635D04D1")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to MRG </h1>
                  <p className="mb-5">
                    Our Convention center .We provide spacial service.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://images.adsttc.com/media/images/5192/55d3/b3fc/4b8d/f000/005c/large_jpg/MBS_Image_by_BIG_03.jpg?1368544714")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to MRG </h1>
                  <p className="mb-5">
                    This our Tulip garden city.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://scontent.fdac120-1.fna.fbcdn.net/v/t1.6435-9/50755866_547006865819300_8408494016408059904_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TsDAdJcGUfgAX8xz2Bz&_nc_ht=scontent.fdac120-1.fna&oh=00_AT8NUpL28xECZ0vOeChmFXqs07XmNenAEUP7reizFQjSIA&oe=6380282E")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to MRG</h1>
                  <p className="mb-5">
                    Trishal Medical center 
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/p/AF1QipO4xCgunHQ9tL8v9RisIF6iMWoMhiMW9y7Rk_ys=w1080-h608-p-no-v0")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to MRG</h1>
                  <p className="mb-5">
                    Healthcare at Home
                    we provided 24/7 service
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
