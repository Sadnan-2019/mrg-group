import React from "react";
import hcah from "../../assets/HCAHBD.png";
import tmc from "../../assets/tmc.png";
import tcc from "../../assets/tcc.png";
import tulip from "../../assets/tulip.png";
import mrs from "../../assets/mrs.png";
import land from "../../assets/land.png";
import leap from "../../assets/leap.png";
import   agro  from   "../../assets/agro.png";
const CompaniesProfile = () => {
  return (
    <div>
      <div>
        <p
          className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b text-neutral lg:text-center py-6 "
          style={{ lineHeight: "120%" }}
        >
          Business Sectors{" "}
        </p>

        <p className="lg:text-[20px] md:text-[18px] font-bold text-[26px] text-left poppins-b text-neutral lg:text-center ">
          MRG GROUP stands out of ventures engaged till date. The steadfast
          consistency, success and encouragement from the customers and
          stakeholders ignites confidence in our journey of sustainability and
          growth.
        </p>

        <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center justify-items-center py-10">
          <div
            className=" card	 w-40	 	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={hcah} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	  	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={tmc} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	 	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={tcc} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	  	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={tulip} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	  	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={leap} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	  	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={mrs} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	 	 	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={land} alt="Shoes" className="rounded-xl w-40	" />
          </div>
          <div
            className=" card	w-40	 	 	 border-solid shadow-lg	p-5"
            style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
          >
            <img src={agro} alt="Shoes" className="rounded-xl w-40	" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfile;
