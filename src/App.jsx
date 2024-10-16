import React from 'react';
import Home from './Pages/Home.jsx';
import PaysaPicks from './Pages/PaysaPicks.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Home/Navbar';

function App() {
  return (

    //Edit Home Page with "About us page " because it was giving error due to routes needs to adjusted after development

    
    <Router>
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/paysa-picks' element={<PaysaPicks />} />
        <Route path='*' element={<PageNotFound />} />
       </Routes>
     </Router>

    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/paysa-picks' element={<PaysaPicks />} />
    //     <Route path='*' element={<PageNotFound />} />
    //    </Routes>
    //  </Router>

    // <AboutUs />






   
  );
}

export default App;
