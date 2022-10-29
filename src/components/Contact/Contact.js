import React from 'react';
import { Input } from "@material-tailwind/react";


const Contact = () => {
    return (
        <div>
            <div className='grid grid-cols-1   '> 


            <img src="https://www.akij.net/img/ach-4.png" className="p-2" alt="" />
<div>


<div className="w-72">
      <Input label="Input With Icon" icon={<i className="fas fa-heart" />} />
    </div>


</div>


            </div>
        </div>
    );
};

export default Contact;