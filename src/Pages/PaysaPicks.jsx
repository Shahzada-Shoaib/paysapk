import React from 'react'
import BannerPaysa from '../components/BannerWithoutVideo';
import PaysaPage from '../components/Paysa-picks-page/PaysaPage';
import { useEffect } from 'react';

function PaysaPicks() {
  useEffect(() => {
    // Component load hone par page upar scroll kar do
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <PaysaPage/>
    </div>
  )
}

export default PaysaPicks;