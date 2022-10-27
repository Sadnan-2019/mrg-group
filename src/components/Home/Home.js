import React from 'react';
import Achievements from '../Achievements/Achievements';
// import Busniess from '../Busniess/Busniess';
import Chairman from '../Chairman/Chairman';
import CompaniesProfile from '../CompaniesProfile/CompaniesProfile';
import Landing from '../Landing/Landing';
import Managment from '../Managment/Managment';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
             
               <CompaniesProfile/>
               <Chairman/>

               <Managment/>
               <Achievements/>
          </div>
     );
};

export default Home;