import React from 'react';
import BottomFPage from './components/BottomFPage';
import './style/App.scss';
import AppProvider from './components/AppContext';
import SearchBox from './components/SelectBox';

function App() {

  return (
    <>

      <div className="container">
        <div className="logo">
          <img className='box' src='img/skrytka.png' alt="" />
        </div>
        <h1 className='welcome'>Witaj!</h1>


        <AppProvider>
          <SearchBox />
          <BottomFPage />
        </AppProvider>

      </div>



    </>
  );

}

export default App;
