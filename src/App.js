import React from 'react';
import BottomFPage from './components/BottomFPage';
import './style/App.scss';
import AppProvider from './components/AppContext';
import SearchBox from './components/SelectBox';
import Truck from './components/Truck';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
function App() {

  return (
    <>



      <div className="container">
        <div className="logo">
          <img className='box' src='img/Skrytka-Samologo.png' alt="" />
        </div>
        <h1 className='welcome'>Witaj!</h1>


        <AppProvider>
          <SearchBox />

          <Router>

            <BottomFPage />

          </Router>

        </AppProvider>

      </div>



    </>
  );

}

export default App;
