import React from 'react';
import { FaPhoneVolume } from "react-icons/fa";
const NewsLanding = () => {
    return (
        <div>
              <section className=" h-auto physio ">
        <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid lg:grid-cols-1 grid-cols-1 gap-5">
          <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
            {/* <div className="flex items-center gap-2 bg-gray-100 w-fit px-3 rounded-full py-2 border-[1px] border-gray-200 mb-5">
                 <p className=" px-2 py-[2px] text-white rounded-full  " style={{backgroundColor: "#453364" }}>
                   $
                 </p>
                 <p className='text-sm'>Discover the easiest way to get our service!</p>
               </div> */}
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="md:text-[43px] font-bold text-[20px] text-left poppins-b "
              style={{ lineHeight: "120%", color: "#453364" }}
            >
              We are committed to  your recovery from pain
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className=""
              style={{ lineHeight: "120%", color: "#453364" }}
            >
             
            </p>

            {/* <p
                 data-aos="fade-up"
                 data-aos-duration="2000"
                 className="max-w-lg mt-7 text-left md:text-[17px] poppins-t text-gray-600 "
               >
                 First ever one stop healthcare solution at your home in bangladesh.
               </p> */}
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="max-w-lg mt-7 font-bold   md:text-[25px] poppins-t text-left "
              style={{ lineHeight: "120%", color: "#453364" }}
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
                style={{ color: "#453364" }}
              />
              <span className=" text-[20px] lg:text-2xl " style={{ color: "#453364" }}>
                {" "}
                Call Now: 01619848555
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex  gap-4 mt-10 text-center"
            >
              {/* <Link
                   className="inline-flex items-center px-8 py-3  border   rounded hover:bg-transparent active:text-primary focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black"
                   to="/resume-builder/how-to-start" style={{backgroundColor: "#453364" }}
                 >
                   <span className="text-sm font-medium"> Get Started </span>
                   <BsArrowRight className="text-lg ml-2" />
                 </Link> */}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default NewsLanding;