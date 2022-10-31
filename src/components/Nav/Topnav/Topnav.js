import React from "react";
import logo from "../../../assets/logo.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
 
import sub from "../../../assets/sub.png"
import schs from "../../../assets/schs.png"
const Topnav = () => {
  return (
    <div>
      <div className="flex justify-between	 px-12  bg-[#123261] items-center ">
        <div>
          <img src={logo} className="w-20" alt="" />
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center gap-12  ">
          {/* <div className="flex ">
            <a href="">
              <TiSocialTwitter className="text-lg ml-2 text-white" />
            </a>
            <p>Toll Free: 08000016609</p>
            <p>Hot Line:16609</p>
          </div> */}
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl    " />
            </div>
            <div>
              <p className="text-[10px] lg:text-xs   	">
                01619848555  
              </p>
              <p className="text-[10px] lg:text-xs  	 	">01619848555  </p>
            </div>
          </div>
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <HiOutlineMailOpen className="text-[10px] lg:text-2xl  	  " />
            </div>
            <div>
              <p className="text-[10px] lg:text-xs     	">
                Email us
              </p>
              <p className="text-[10px] lg:text-xs	 	">info@hcah.mrg.com.bd</p>
            </div>
          </div>
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
            <p className="text-[10px] lg:text-xs   	">
                Link Organization
              </p>
            </div>
            <div>
              
              <a href="https://www.sub.ac.bd/" target="_blank" ><img src={sub} className="  w-40 lg:w-28  	" alt=""/></a>
              <a href="https://schs.edu.bd/" target="_blank" ><img src={schs} className="   w-40 lg:w-28  	" alt=""/></a>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
