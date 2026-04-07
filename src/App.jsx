import './App.css'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import Success from './components/Success/Success.jsx';
import Service from './components/Servicess/Service.jsx'
import Work from './components/work/Work.jsx';
import Choose from './components/Choose/Choose.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Dev from './components/Development/Dev.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {

  return (
    <>
  <Navbar/>
  <Banner/>
  <Success/>
  <Service/>
  <Work/>
  <Choose/>
  <Reviews/>
  <Dev/>
  <Footer/>
    </>
  )
}

export default App
