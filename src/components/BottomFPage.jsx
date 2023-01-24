
import React, {useContext} from 'react';

import { AppContext } from './AppContext';
import {useNavigate} from 'react-router-dom';

import {Link, Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Truck from './Truck';
import App from '../App';

const BottomFPage = () => {



  const {unitOsp} = useContext(AppContext);

  const handleButtonClick = () => {
    if (unitOsp === "") {
      alert('Musisz wybrać jednostkę')
    } else {
     
    }
  }
 return (
  <>

     
<button onClick={handleButtonClick} className='btnUnit'>
<Link to = '/truck'>Przejdź dalej  </Link>
      </button>

     
    
 
      <div className='FirstFooter'>Nie widzisz swojej jednostki? <li className='li-write-to-us'><a className='a-write-to-us' href = '/linkdostrony'> Napisz do nas!</a></li></div>
      <footer>@Wszelkie prawa zastrzeżone 2023 Skrytka.app<p className='skrytka-date'>Skrytka 2023</p></footer>
  </>
 ) 
}

export default BottomFPage;