import React from "react";

const Chairman = () => {
  return (
    <div>
      <div className=" px-10 bg-gradient-to-r from-[#303640] to-[#103264] mt-10">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2      py-10 items-center justify-items-center  drop-shadow-2xl  text-white p-4 ">
          <div className="sm:h-80  sm:w-5/6 lg:w-5/6 h-96">
            {/* <img src="https://idiary.in/Images/snap2.jpg" alt="Album" /> */}

            <iframe
              src="https://www.youtube.com/embed/_ysd-zHamjk"
              title="Corporate Video Production Marketing Videos - How To Make Great Marketing Videos"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="sm:h-80 sm:w-5/6 lg:w-5/6 h-96 "
            ></iframe>
          </div>

          <div
            className="card-body"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className=" lg:text-[43px] md:text-[30px] font-bold text-white leading-10	">
              For the People, for the Country
            </h2>
            <p className=" max-w-lg lg:text-[20px] md:text-[20px]   text-white    ">
              MR group is one of the leading and fastest-growing conglomerates
              in Bangladesh. Hospital,Restaurant,Convention Center,Life
              Enrichment Activity Program, Medical equipment,
              Agriculture,Fisheries, Media Solution,Beauty Parlor & Entertainment.
            </p>
            {/* <div className="card-actions  ">
              <button className="btn bg-neutral  " style={{ color: "white" }}>
                About More
              </button>auty
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
