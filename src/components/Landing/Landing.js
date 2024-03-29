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
          <div className="  ">
            <div
              className="hero sm:min-h-fit text-red-700  sm:min-h-screen-0 lg:min-h-screen		bg-cover landingone   "
              style={{
                backgroundImage: `url("https://i.ibb.co/tZTT0hD/tmc-web-banner.png")`,backgroundSize:"cover"
              }}
            >
              <div className=" hero-overlay  sm:bg-opacity-60 lg:bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 max-w-lg  sm:text-xl lg:text-[33px]  font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to TMC 
                  </h1>
                  <p className="mb-5 max-w-lg " style={{ lineHeight: "120%" }}>
                    Trishal medical center  have experts surgeons performing surgery everyday.We have
                    state of the art equipments.You can not go wrong with TMC.We
                    alwayes dedicate ourselves for your care.we are active 24/7.
                    If you want to know more please  click the button.
                  </p>
                  <a href="https://www.facebook.com/tmcdiagnostichospitaltr" target="_blank" >
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>
                    </a>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className="hero sm:min-h-screen-0 lg:min-h-screen landingtwo  "
              style={{
                backgroundImage: `url("https://i.ibb.co/vJQVZ9r/nurseservice.jpg")`,
              }}
            >
              <div className="hero-overlay sm:bg-opacity-60 lg:bg-opacity-60"></div>
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
                    services are nursing, MATS, Physiotherapy, Medical Caregiver
                    & Caregiver.We also setup ICU at home with medical
                    equipments & ICU consultant physician.
                  </p>
                  <a target="_blank" href="https://www.hcah.mrg.com.bd/?fbclid=IwAR3e0yV_TpgKlr9LlKgUfLeiNrc8oPzr0z7vc1uprSPH17c-QM8mzKPFHJk">
                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="   hero    sm:min-h-screen-0 lg:min-h-screen  landingthree    "
              style={{
                backgroundImage: `url("https://i.ibb.co/6RWDgGd/leapteam.jpg")`,
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to LEAP
                  </h1>
                  <p className="mb-5 max-w-lg " style={{ lineHeight: "120%" }}>
                    LEAP is one stop solution for your pain.If you are suffering
                    from pain in your back,shoulder,leg,arm,we have
                    physiotherapy treatment.We also can treat post-stroke
                    paralysis.we have equipments which are very latest,those
                    will help to reduce your suffering.
                  </p>

                  <a href="https://leap.mrg.com.bd/" target="_blank" >

                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="hero    sm:min-h-screen-0 lg:min-h-screen landingfive "
              style={{
                backgroundImage: `url("https://i.ibb.co/zJD0YnN/tulip-2.png")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-lg">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to<br></br> Tulip Garden & Restaurant{" "}
                  </h1>
                  <p className="mb-5 max-w-lg" style={{ lineHeight: "120%" }}>
                    Tulip garden welcomes you to dine chinese,thai,continental &
                    desi food at any time. We have options for home delivery.We
                    are open for birthdays,matrimonial & any other parties.
                  </p>

                  <a href="https://i.ibb.co/9Yzvk2F/Food-Facebook-Cover-Banner.png" target="_blank" >

                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className=" hero    sm:min-h-screen-0 lg:min-h-screen landingfour     "
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL644648_p7nd0z.jpg")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-lg">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to Trishal Agro
                  </h1>
                  <p className="mb-5 max-w-lg" style={{ lineHeight: "120%" }}>
                     Trishal Agro is a combination of Fisheries,Poultry & Dairy.
                  We have organic food for your.We have more than 10 hatcheries.
                  We have 7 fisheries.We grow different types of fishes.
                    
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
              className="hero    sm:min-h-screen-0 lg:min-h-screen landingsix"
              style={{
                backgroundImage: `url("https://www.hindiroot.com/wp-content/uploads/2021/03/how-to-start-a-beauty-parlor-business-in-hindi.jpg")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-lg">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to Rose Beauty Garden{" "}
                  </h1>
                  <p className="mb-5 max-w-lg" style={{ lineHeight: "120%" }}>
                    We have expert beautician for bridal-makeup.You can relay on
                    our friendly staff.We will fill-up all your make up needs.
                  </p>

                  <a href="https://www.facebook.com/rosebeautytr" target="_blank">

                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="hero    sm:min-h-screen-0 lg:min-h-screen   landingseven  "
              style={{
                backgroundImage: `url("https://i.ibb.co/7Q5PP0B/Tcc-Web-banner-2-min.png")`,
              }}
            >
              <div className=" hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-md">
                  <h1
                    className="mb-5 max-w-lg sm:text-xl lg:text-[30px] font-bold"
                    style={{ lineHeight: "120%" }}
                  >
                    Welcome to TCC{" "}
                  </h1>
                  <p className="mb-5 max-w-lg" style={{ lineHeight: "120%" }}>
                    Trishal Convention Center can accomodate 2000 people at a
                    time.We are open for meetings,convocation & get together.
                  </p>

                  <a href="https://www.facebook.com/TCCTrishal"  target="_blank">

                  <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
                    Get Started
                  </button>

                  </a>
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
