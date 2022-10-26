import React from 'react';
import Busniess from '../Busniess/Busniess';
// import Chairman from '../Chairman/Chairman';
import CompaniesProfile from '../CompaniesProfile/CompaniesProfile';
import Landing from '../Landing/Landing';
import Managment from '../Managment/Managment';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
               {/* <Busniess/> */}
               <CompaniesProfile/>
               {/* <Chairman/> */}

               <Managment/>
          </div>
     );
};

export default Home;