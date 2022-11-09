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
              <div className=" hero-overlay  sm:bg-opacity-0 lg:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 max-w-lg  sm:text-xl lg:text-[33px]  font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to TMC{" "}
                  </h1>
                  <p className="mb-5 max-w-lg " style={{ lineHeight: "120%" }}>
                    We have experts surgeons performing surgery everyday.We have
                    state of the art equipments.You can not go wrong with TMC.We
                    alwayes dedicated for your care.we are active 24/7 days.
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
              className="hero sm:min-h-screen-0 lg:min-h-screen landingtwo bg-cover bg-center"
              style={{
                backgroundImage: `url("https://hcah.mrg.com.bd/static/media/nurseservice.a7aa8c08eeeb13c8337d.jpg")`,
              }}
            >
              <div className="hero-overlay sm:bg-opacity-0 lg:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to HealthCare at Home Bangladesh{" "}
                  </h1>
                  <p className="mb-5 max-w-lg " style={{ lineHeight: "120%" }}>
                    We are the pioneers of home HealthCare service provider. Our
                    services are nursing,MATS,Physiotherapy,Medical Caregiver &
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
                    from pain in your back,shoulder,leg,arm,we have
                    physiotherapy treatment.We also can treat post-stroke
                    paralysis.we have equipments which are very latest,those
                    will help to reduce your suffering.
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
                    Welcome to Trishal Agro
                  </h1>
                  <p className="mb-5">
                    We will supplyn you with organic food.We have
                    fisheries,Poultry & Dairy.
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
                backgroundImage: `url("https://insanelygoodrecipes.com/wp-content/uploads/2022/01/Cheeseburger-Sliders-with-Vegetables-and-Sesame-Seeds.jpg")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold ">
                    Welcome to Tulip Garden & Restaurant{" "}
                  </h1>
                  <p className="mb-5">
                    Tulip garden welcomes you to dine chinese,thai,continental &
                    desi food at any time. We have options for home delivery.We
                    are open for birthdays,matrimonial & any other  parties.
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
                backgroundImage: `url("https://www.hindiroot.com/wp-content/uploads/2021/03/how-to-start-a-beauty-parlor-business-in-hindi.jpg")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold ">
                    Welcome to Rose Beauty Garden{" "}
                  </h1>
                  <p className="mb-5">
                   We have expert beautician for bridal-makeup.You can 
                   relay on our friendly  staff.We will fill-up all your
                   make up needs.
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
                backgroundImage: `url("http://34.120.136.253/hall_media/hall_index_2730/hall_pic__1e76a6d340cf70ead4214dd5c8ff32fca56a6187")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold ">
                    Welcome to TCC{" "}
                  </h1>
                  <p className="mb-5">
                   Trishal Convention Center can accomodate 2000 people at a
                   time.We are open for meetings,convocation &  get together.  
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
