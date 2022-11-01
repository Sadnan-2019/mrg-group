import React from 'react';

const News = () => {
    return (
        <div>

    

      <div className="py-10"  >
        <div className=" ">
        <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        News & Events
      </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10      py-8">
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white ">
              <h2 className=" text-center font-bold">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Dr Sarwar Iqbal</h2>
             
             <p>Professor & Senior Consultant Cardiologist</p>
              <p>
              MBBS, MD(Nephrology) SPecialist in Kidney Diseases,Professor &
                Head,Dept. of Nephrology,BIRDEM Hospital & Ibrahim Medical
                College.
              </p>
             
            </div>
          </div>
        
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Dr.Mohammad Abu Sayeed</h2>
             
             <p> Professor and Head of Department NEUROSURGERY</p>
              <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p>
             
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Dr. Lutfor Rahman</h2>
             
             <p>Specialist   MBBS, MS (CTS) Chief Cardiac Surgeon
             Labaid Cardiac Hospital 
             </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
             
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">Dr. Zakia Hossain</h2>
             
             <p>MD is an Internal Medicine Specialist in USA
             
             </p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
             
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className=" items-center text-center text-white ">
              <h2 className=" text-center font-bold">PROF. DR. S. M. G. KIBRIA</h2>
             
             <p>FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS (General), MSc (Leeds), MBBS (DMC)</p>
              {/* <p>
              MBBS, MS (NEUROSURGERY)  
               
               Specialist in Brain & Spine Surgeon.
              </p> */}
             
            </div>
          </div>
           
           
        
          
         
           
        </div>
        <p className="text-lg text-white md:text-3xl lg:text-3xl text-center py-8">
          Multidisciplinary team of 900+ professionals including doctors,
          nurses, physiotherapists, medical assistant & medical caregiver.
        </p>
      </div>
        </div>
    );
};

export default News;