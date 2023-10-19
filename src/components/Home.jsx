import React from 'react';
import NavBar from './NavBar';
import Photos from './Photos';


const Home = () => {
  return (

    <div>
      <NavBar />
      <div className="text-center">
        <h1 className="titulo-verde p-3">Natural Pic</h1>

            <Photos />

      </div>
    </div>
  );
}

export default Home;