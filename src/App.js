import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
 import Footer from './Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className=" ">
       <Nav/>
       <Home></Home>

       <Footer/>
    </div>
  );
}

export default App;
