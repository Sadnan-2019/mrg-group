import React from "react";

const MoreNews = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        News & Events
      </h2>
      <div className="py-12">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 px- 12 items-center justify-items-center gap-12 mx-12">
          <div
            className="card  border w-full h-full    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://i.ibb.co/1893Wm0/tmcnewimg.jpg"
                alt="Shoes"
                className=" w-full  p-4  hover:  transition duration-500 hover:scale-110 "
                style={{ height: "250px", borderRadius: "25px" }}
              />
              {/* <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" /> */}
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                TMC has just started performing laparoscopic surgery with our
                state of the art instruments.We are very succesfull in this
                regard.We have finished recruting Professor of surgery from renowned hospitals and medical colledges.We are
                accountable and affoardable.
              </h2>
            </div>
          </div>
          <div
            className="card  border w-full h-full    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://i.ibb.co/S0LPY46/tulipres.jpg"
                alt="Shoes"
                className=" w-full  p-4  hover:  transition duration-500 hover:scale-110 "
                style={{ height: "250px", borderRadius: "25px" }}
              />
              {/* <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" /> */}
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                Our chef is foreign traiend.He does magic when he prepares delicious  food for you.Tulip garden  offers 
                very competitive price on chinease,continental,thai & local food.
              </h2>
            </div>
          </div>

          <div
            className="card  border w-full h-full    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://i.ibb.co/nLYzxTW/news.jpg"
                alt="Shoes"
                className=" w-full  p-4  hover:  transition duration-500 hover:scale-110 "
                style={{ height: "250px", borderRadius: "25px" }}
              />
              {/* <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" /> */}
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                Look at the Double baded room at our Sunflower residence.This is looking good and comfortable.We have excellent 
                room service and friendly front desk.
              </h2>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default MoreNews;
