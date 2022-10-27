import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
 import Footer from './Footer/Footer';
import Home from './components/Home/Home';
import Topnav from './components/Nav/Topnav/Topnav';

function App() {
  return (
    <div className=" ">


      <Topnav/>
       <Nav/>
       <Home></Home>

       <Footer/>
    </div>
  );
}

export default App;
