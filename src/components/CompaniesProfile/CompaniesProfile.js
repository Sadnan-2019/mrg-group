import React from "react";
import hcah from "../../assets/HCAHBD.png";
import tmc from "../../assets/tmc.png";
import tcc from "../../assets/tcc.png";
import tulip from "../../assets/tulip.png";
import mrs from "../../assets/mrs.png";
import land from "../../assets/land.png";
import leap from "../../assets/leap.png";
import agro from "../../assets/agro.png";
import rose from "../../assets/rose.png";
const CompaniesProfile = () => {
  return (
    <div>
      <div>
      
        <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Companies Profile
      </h2>

        <p className="lg:text-[20px] md:text-[18px] font-bold text-[26px] text-left poppins-b text-neutral lg:text-center ">
          MRG GROUP stands out of ventures engaged till date. The steadfast
          consistency, success and encouragement from the customers and
          stakeholders ignites confidence in our journey of sustainability and
          growth.
        </p>

        <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-items-center py-10">
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={hcah}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={tmc}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>

          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={tulip}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={leap}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={mrs}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={land}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={tcc}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>

          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={agro}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="">
              <img
                src={rose}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfile;
