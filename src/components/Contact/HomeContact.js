import React from "react";
import { Input, Textarea } from "@material-tailwind/react";
 
import sub from "../../assets/sub.png";
import schs from "../../assets/schs.png";
// import schs from "../../../assets/schs.png"
const HomeContact = () => {
  return (
    <div>
      <div className="py-10 ">
        <div className="   ">
          <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
            Contact
          </h2>
          {/* <h1 className=' w-32 h-1 rounded-lg mt-2 mb-4 mx-auto' style={{backgroundColor: "#453364" }}></h1> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2    py-10 items-center justify-items-center     shadow-2xl    bg-gradient-to-r from-[#303640] to-[#103264]  ">
          <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-blue-500/40  bg-base-100">
              <div className="card-body">
                <div className="form-control w-full max-w-xs">
                  <Input
                    label="Name"
                    type="text"
                    name="name"
                    icon={<i className="fas fa-heart" />}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <Input
                    label="Email"
                    type="text"
                    name="name"
                    icon={<i className="fas fa-heart" />}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <Input
                    label="Phone"
                    type="text"
                    name="name"
                    icon={<i className="fas fa-heart" />}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <Input
                    label="Subject"
                    type="text"
                    name="name"
                    icon={<i className="fas fa-heart" />}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <Textarea label="Message" />
                </div>

                <div className="py-5">
                  <input
                    type="submit"
                    className="btn  w-full max-w-x bg-gradient-to-r from-[#303640] to-[#103264]"
                    value="Send message"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="   w-full max-w-sm       "
            data-aos="fade-left"
            data-aos-duration="1000"
            
            >
              <div className=" ">
                <div
                  className="flex items-center justify-items-center  font-bold    gap-10 mb-7"
                  style={{ color: "white" }}
                >
                  <div>
                   
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3204/3204325.png"
                      className="w-12 bg-white rounded-full p-2   " alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs	 	">Email us</p>
                    <p className="text-[10px] lg:text-xs	 	">info@mrg.com.bd</p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-items-center  font-bold    gap-10 mb-7"
                  style={{ color: "white" }}
                >
                  <div>
                    
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1151/1151429.png"
                      className="w-12 bg-white rounded-full p-2   " alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs     	">Call Now</p>
                    <p className="text-[10px] lg:text-xs	 	">+88 01718000000</p>
                    <p className="text-[10px] lg:text-xs	 	">+88 01718000000</p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-items-center  font-bold    gap-10 mb-7"
                  style={{ color: "white" }}
                >
                  <div>
                    
                     <img
                      src="https://cdn-icons-png.flaticon.com/512/819/819865.png"
                      className="w-12 bg-white rounded-full p-2   " alt=""
                    />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs     	">Address</p>
                    <p className="text-[10px] lg:text-xs	 	">House No 11 Road 108</p>
                    <p className="text-[10px] lg:text-xs	 	">Gulshan 2, Dhaka 1212</p>
                  </div>
                </div>
                <div
                  className="flex items-center justify-items-center  font-bold    gap-10 mb-7"
                  style={{ color: "white" }}
                >
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/455/455792.png"
                      className="w-12 bg-white rounded-full p-2   " alt=""
                    />
                  </div>
                  <div>
                    <a href="https://www.sub.ac.bd/" target="_blank">
                      <img src={sub} className="  w-40 lg:w-28  	" alt="" />
                    </a>
                    <a href="https://schs.edu.bd/" target="_blank">
                      <img src={schs} className="   w-40 lg:w-28  	" alt="" />
                    </a>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
