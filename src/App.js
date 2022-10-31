import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
 import Footer from './Footer/Footer';
import Home from './components/Home/Home';
import Topnav from './components/Nav/Topnav/Topnav';
import { Route, Routes } from "react-router-dom";
// import News from './components/News/News';
import NewsMedia from './components/NewsMedia/NewsMedia';
import NewsLanding from './components/NewsMedia/NewsLanding';

function App() {
  return (
    <div className=" ">


      <Topnav/>
       <Nav/>
       {/* <Home></Home> */}
       <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news-media" element={<NewsLanding/>}></Route>
        
 
       
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
