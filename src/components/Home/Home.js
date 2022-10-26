import React from 'react';
import Busniess from '../Busniess/Busniess';
import Chairman from '../Chairman/Chairman';
import Landing from '../Landing/Landing';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
               <Chairman/>
               <Busniess/>
          </div>
     );
};

export default Home;