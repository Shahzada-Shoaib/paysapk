import React from 'react';
import Home from './Pages/Home.jsx';
import PaysaPicks from './Pages/PaysaPicks.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.js';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/paysaPicks' element={<PaysaPicks />} />
    //     <Route path='*' element={<PageNotFound />} />

    //   </Routes>
    // </Router>
    <PaysaPicks/>
    
  );
}

export default App;
