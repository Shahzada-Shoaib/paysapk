import React from 'react';
import Home from './Pages/Home.jsx';
import PaysaPicks from './Pages/PaysaPicks.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paysa-picks' element={<PaysaPicks />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
