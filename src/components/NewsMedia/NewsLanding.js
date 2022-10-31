import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
import "./NewsLanding.css"
const NewsLanding = () => {
    return (
        <div>
              {/* <section className=" h-auto news ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
            
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "white" }}
            >
              We are committed to  your recovery from pain
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className=""
              style={{ lineHeight: "120%", color: "white" }}
            >
             
            </p>
 
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t text-left "
              style={{ lineHeight: "120%", color: "white" }}
            >
                Physical pain? Don’t worry! Our expert
              physiotherapists will provide easy & effective methods of pain
              relief.
            </p>
            <div
              className="flex items-center mt-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <FaPhoneVolume
                className="text-2xl "
                style={{ color: "white" }}
              />
              <span className=" text-[20px] lg:text-2xl " style={{ color: "white" }}>
                {" "}
                Call Now: 01619848555
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex  gap-4 mt-10 text-center"
            >
             
            </div>
          </div>
        </div>
      </section> */}
      <div className="hero min-h-screen news"  >
  <div className="  "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsLanding;