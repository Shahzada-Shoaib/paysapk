import React from 'react';
// import AboutUsCarousel from './components/phase2/AboutUsCarousel';
import Home from './Pages/Home.jsx';
import PaysaPicks from './Pages/PaysaPicks.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Home/Navbar';
import GetInTouch from './Pages/GetInTouch.jsx';
import Services from './Pages/Services.jsx';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/get-in-touch' element={<GetInTouch />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/paysa-picks' element={<PaysaPicks />} />
        <Route path='*' element={<PageNotFound />} />
       </Routes>
     </Router>   

    // <AboutUsCarousel/>
  );
}

export default App;
