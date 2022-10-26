import React from "react";

const Chairman = () => {
  return (
    <div>
      <div className="py-[10px] px-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  bg-base-100   py-10 items-center justify-items-center shadow-2xl">
          <img src="https://idiary.in/Images/snap2.jpg" alt="Album" />

          <div
            className="card-body"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className=" lg:text-[43px] md:text-[30px] font-bold text-neutral">
              CHAIRMAN’S MESSAGE
            </h2>
            <p className=" max-w-lg  lg:text-[20px] md:text-[20px]   text-neutral    ">
              MRG group is one of the leading and fastest-growing conglomerates
              in Bangladesh. Hospitality,Resturant,Convension center,Life
              enrichment activity program, Medical equipment,
              Materials,Agriculture, Media & Entertainment.
            </p>
            <div className="card-actions  ">
              <button className="btn bg-neutral  " style={{ color: "white" }}>
                About More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
