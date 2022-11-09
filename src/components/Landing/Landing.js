import React from "react";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Landing.css";
// import tcc from "../../assets/tccone.jpg"
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
      <div
        className="  px-7 py-7  "
        // data-bs-ride="carousel"
        // data-aos="fade-down"
        // data-aos-offset="300"
        // data-aos-delay="5000"
        // data-aos-duration="3000"
      >
        <Slider {...settings}>
          <div className=" ">
            <div
              className="hero sm:min-h-screen-0 lg:min-h-screen landingone bg-cover bg-center"
              style={{
                backgroundImage: `url("https://shrimangalmurtihospital.com/wp-content/uploads/2021/07/img-orthopedic-surgery.jpg")`,
              }}
            >
              <div className=" hero-overlay sm:bg-opacity-0 lg:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 sm:text-xl lg:text-5xl font-bold">
                    Welcome to Trishal Medical Center{" "}
                  </h1>
                  <p className="mb-5">
                    We have experts surgeons performing surgery everyday.We have
                    state of the art equipments.You can not go wrong with TMC.
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
                  <h1 className="mb-5 text-5xl font-bold">
                    Welcome to HealthCare at Home Bangladesh{" "}
                  </h1>
                  <p className="mb-5">
                    We are the pioneers of home HealthCare service
                    provider.Giving service to patients at home .Our services
                    are nursing,MATS,Physiotherapy,Medical Caregiver &
                    Caregiver.
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
                    LEAP is one stop solution for your pain.If you are suffering
                    from lower backpain ,neckpain,shoulder pain,we have
                    physiotherapy treatment your condition.We also can treat
                    post-stroke paralysis.we have equipments which are very
                    latest,those will help to reduce your suffering.
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
                backgroundImage: `url("https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL644648_p7nd0z.jpg")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Welcome to Trishal Agro(Fish,Dairy,Poultry)
                  </h1>
                  <p className="mb-5">
                    We have experts surgeons performing surgery everyday.We have
                    state of the art equipments.You can not go wrong with TMC.
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
                backgroundImage: `url("https://i.ibb.co/7NQdLX4/tulipgarden.pngE")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold ">
                    Welcome to Tulip Garden & Resturent{" "}
                  </h1>
                  <p className="mb-5">
                    Tulip garden welcomes you to dine chines,thai,continental &
                    desi food at any time. We have options for home delivery as
                    well.We offer discounts on selected items.We are open for
                    birthday,matrimonial party.
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
