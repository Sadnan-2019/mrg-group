import React from 'react';

const News = () => {
    return (
        <div>

    
<h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        News & Events
      </h2>
 <div className="py-12">
 <div className='grid grid-cols-3 px- 12 items-center justify-items-center'>
  <div className="card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
   <div className="card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
   <div className="card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
  </div>
    
     </div>
        </div>
    );
};

export default News;