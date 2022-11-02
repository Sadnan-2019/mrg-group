import React from "react";

const Achievements = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Achievments
      </h2>

      <div className="grid grid-sm-1  lg:grid-cols-3   px-12 gap-10 mb-10">
        <div>
          <img src="https://www.akij.net/img/achievement-single.png" className="p-2 transform      hover:  transition duration-500 hover:scale-110" alt="" />
        </div>
        <div >
          <img src="https://www.akij.net/img/ach-2.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
          <img src="https://www.akij.net/img/ach-4.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
        </div>

        <div>
          <img src="https://www.akij.net/img/ach-3.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
          <img src="https://www.akij.net/img/achievement-multiple.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
