import React from 'react';
import Achievements from '../Achievements/Achievements';
// import Busniess from '../Busniess/Busniess';
import Chairman from '../Chairman/Chairman';
import CompaniesProfile from '../CompaniesProfile/CompaniesProfile';
import Contact from '../Contact/Contact';
import Director from '../Director/Director';
import Landing from '../Landing/Landing';
import Managment from '../Managment/Managment';
import News from '../News/News';

const Home = () => {
     return (
          <div>
               <Landing></Landing>
             
               <CompaniesProfile/>
          
               <Director/>
               <Chairman/>
               <Managment/>
               <Achievements/>
               <News/>

               <Contact/>
          </div>
     );
};

export default Home;