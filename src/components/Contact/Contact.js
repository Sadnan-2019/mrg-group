import React from "react";
import { Input,Textarea } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="py-10 ">
        <div className="   ">
          <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
           Contact 
          </h2>
          {/* <h1 className=' w-32 h-1 rounded-lg mt-2 mb-4 mx-auto' style={{backgroundColor: "#453364" }}></h1> */}

          
        </div>
      <div className="grid grid-cols-1    py-10 items-center justify-items-center     shadow-2xl    bg-gradient-to-r from-[#303640] to-[#103264] ">
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-blue-500/40  bg-base-100">
          <div className="card-body"> 
          <div className="form-control w-full max-w-xs">
            
                
            <Input label="Name" type="text" name="name" icon={<i className="fas fa-heart" />} />
          </div>
          <div className="form-control w-full max-w-xs">
            
                
            <Input label="Email" type="text" name="name" icon={<i className="fas fa-heart" />} />
          </div>
          <div className="form-control w-full max-w-xs">
            
                
            <Input label="Phone" type="text" name="name" icon={<i className="fas fa-heart" />} />
          </div>
          <div className="form-control w-full max-w-xs">
            
                
            <Input label="Subject" type="text" name="name" icon={<i className="fas fa-heart" />} />
          </div>

          <div className="form-control w-full max-w-xs">
          
      <Textarea label="Message" />
     
              
              </div>

<div className='py-5'>
     <input type="submit" className="btn  w-full max-w-x bg-gradient-to-r from-[#303640] to-[#103264]" value="Send message"  />
     </div>
          </div>
          </div>
            
          
        </div>
      </div>

 
    </div>
  );
};

export default Contact;
