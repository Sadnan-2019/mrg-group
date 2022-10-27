import React from 'react';
import Achievements from '../Achievements/Achievements';
// import Busniess from '../Busniess/Busniess';
import Chairman from '../Chairman/Chairman';
import CompaniesProfile from '../CompaniesProfile/CompaniesProfile';
import Director from '../Director/Director';
import Landing from '../Landing/Landing';
import Managment from '../Managment/Managment';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
             
               <CompaniesProfile/>
          
               <Director/>
               <Chairman/>
               <Managment/>
               <Achievements/>
          </div>
     );
};

export default Home;