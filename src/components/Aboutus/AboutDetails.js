import React from "react";
import akij from "../../assets/akij.jpg";
const AboutDetails = () => {
  return (
    <div>
      <div>
        <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 px-12 gap-10  items-center justify-items-center">
          <div>
            <p className="text-neutral text-1xl p-5">
              MRG Group of Companies was established in the year 1998 and
              started its commercial operation in mid 1999.
            </p>
            <p className="text-neutral text-1xl p-5">
              Within the short period of time, it has built confidence to the
              customers of renowned brands worldwide. Root Group is a premium
              denim producer and well-known name in the denim industry. It’s a
              vertical unit, which is capable of making denim fabric to garments
              as its final output. The yarn is being made at our own spinning
              mill, and denim fabric and garments under Root Apparels Ltd-all
              are under the same roof & same big name of Root Group of
              Companies.
            </p>
            <p className="text-neutral text-1xl p-5">
              The entire sister concerns of MRG Group are well equipped with
              most modern laboratories, machineries, equipment and facilities.
              Total numbers of corporate employees and workers are 4500. The
              group runs under the proven leadership of Mr. Mohammed Razzakul
              Hossen Tutul and comprises management body and employees with long
              experience and proven track record in this sector.
            </p>
          </div>
          <div data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000">
            <img className="p-4" src={akij} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
