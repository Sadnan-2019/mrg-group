import React from "react";
import logo from "../../../assets/logo.png";
import { TiSocialTwitter } from "react-icons/ti";
import { MdOutlinePhonelinkRing } from "react-icons/md";
const Topnav = () => {
  return (
    <div>
      <div className="flex justify-between	 px-12  bg-neutral items-center ">
        <div>
          <img src={logo} className="w-20" alt="" />
        </div>
        <div className="grid grid-cols-2 ">
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
              <p className="text-[10px] lg:text-sm   	">
                01619848555  
              </p>
              <p className="text-[10px] lg:text-sm	 	">info@hcah.mrg.com.bd</p>
            </div>
          </div>
          <div
            className="flex items-center font-bold    gap-2"
            style={{ color: "white" }}
          >
            <div>
              <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl  	  " />
            </div>
            <div>
              <p className="text-[10px] lg:text-sm   	">
                01619848555 / 01779848555
              </p>
              <p className="text-[10px] lg:text-sm	 	">info@hcah.mrg.com.bd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
