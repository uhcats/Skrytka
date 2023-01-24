
import React, {useContext} from 'react';

import { AppContext } from './AppContext';


const BottomFPage = () => {
  const {unitOsp} = useContext(AppContext);

  const handleButtonClick = () => {
    if (unitOsp === "") {
      alert('Musisz wybrać jednostkę')
    } else {
      // Redirect
    }
  }
 return (
  <>

  <button onClick={handleButtonClick} className='btnUnit'>Przejdź dalej</button>


  <div className='FirstFooter'>Nie widzisz swojej jednostki? <li className='li-write-to-us'><a className='a-write-to-us' href="/track"> Napisz do nas!</a></li></div>
  <footer>@Wszelkie prawa zastrzeżone 2023 Skrytka.app<p className='skrytka-date'>Skrytka 2023</p></footer>
  </>
 ) 
}

export default BottomFPage;