import React from "react";
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
import tcc from "../../assets/tccone.jpg"
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
      <div className="  px-7 py-7  " data-bs-ride="carousel" data-aos="fade-down"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000">
        <Slider {...settings}>
          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://scontent.fdac120-1.fna.fbcdn.net/v/t1.6435-9/50755866_547006865819300_8408494016408059904_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TsDAdJcGUfgAX8xz2Bz&_nc_ht=scontent.fdac120-1.fna&oh=00_AT8NUpL28xECZ0vOeChmFXqs07XmNenAEUP7reizFQjSIA&oe=6380282E")`,
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content  " >
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold ">Welcome to MRG </h1>
                  <p className="mb-5">
                    Our Convention center .We provide spacial service.
                  </p>
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
            Get Started
            </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://hcah.mrg.com.bd/static/media/nurseservice.a7aa8c08eeeb13c8337d.jpg")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to HealthCare at Home Bangladesh </h1>
                  <p className="mb-5">
                    We are the pioneers of home HealthCare service provider.Giving service to patients at home
                    .Our services are nursing,MATS,Physiotherapy,Medical Caregiver & Caregiver.
                  </p>
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
            Get Started
            </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/474/2019/06/27190650/joint-img.jpg")`,
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to Trishal Medical Center </h1>
                  <p className="mb-5">
                    We have experts surgeons performing surgery everyday.We have state of the art 
                    equipments.You can not go wrong with TMC.
                  </p>
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
            Get Started
            </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url("https://stepupstudent.com/wp-content/uploads/2019/08/cropped-72dea39e-6316-11e7-b1de-0034c3d6ea80.jpg")`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Welcome to LEAP</h1>
                  <p className="mb-5">
                     LEAP is one stop solution for your pain.
                  </p>
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
            Get Started
            </button>
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
