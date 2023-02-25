
import React, {useContext} from 'react';

import { AppContext } from './AppContext';

import {Link} from 'react-router-dom';

import FooterQuiz from './FooterQuiz';

const BottomFPage = () => {



  const {unitOsp} = useContext(AppContext);


  

  const buttonShow = unitOsp ? <div className='imgArrow'>
  <Link to = {`/${unitOsp}`}>
 <i id ='fa-solid' className="fa-solid fa-arrow-right"></i>
 </Link>
 </div> 
   : "";

 return (
  <>
      {buttonShow}

      
    
      <div className='FirstFooter'>Nie widzisz swojej jednostki? <li className='li-write-to-us'><a className='a-write-to-us' href = '/linkdostrony'> Napisz do nas!</a></li></div>
      <footer className='footerFirstSite'>@Wszelkie prawa zastrzeżone 2023 Skrytka.app<p className='skrytka-date'>Skrytka 2023</p></footer> 
   
     
     
 
  </>
 ) 
}

export default BottomFPage;