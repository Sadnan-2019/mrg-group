import React from 'react';
import Busniess from '../Busniess/Busniess';
import Chairman from '../Chairman/Chairman';
import Landing from '../Landing/Landing';
import Managment from '../Managment/Managment';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
               <Busniess/>
               <Chairman/>

               <Managment/>
          </div>
     );
};

export default Home;