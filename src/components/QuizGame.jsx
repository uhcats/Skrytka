import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { useEffect} from 'react';




const QuizGame = () => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);


  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds + 1);

      if(seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
      }

    }, 1000);

    return () => clearInterval(timer);

  });
    
 
  

  return (
    <>
     <div id = 'navigationQuiz' className='navigation'>
     
   
        <img onClick = {() => navigate(-1)} id = 'imgArrow' className='imgArrow' src="/img/arrow-turn.png" alt="arrow" />

    <div className="timer">
    <i className="fa-regular fa-hourglass"></i>
    <h1 className='timerTime'>{minutes < 10 ? "0"+minutes: minutes} : {seconds < 10 ? "0"+seconds: seconds}</h1>
    </div>
      <h1 className = 'score'>0/10</h1>

     


     
      </div>
   
        <div className="question">
        <h1 className='questionText1'>Gdzie jest prądownica turbo ?</h1>
      </div>


      <div className="trackImgBox">
          <img className='box1' src= "/img/fire-truck/img1.jpg" alt="track" />
          <img className='box1' src="/img/fire-truck/img2.jpg" alt="track" />
          <img className='box1' src="/img/fire-truck/img3.jpg" alt="track" />
          <img className='box1' src="/img/fire-truck/img4.jpg" alt="track" />

          
      </div>
      <button className='NextQuestionButton'>Następne pytanie</button>




      <div className='FooterSecondSite'>
     
     <a className='a-write-to-us-1' href = '/linkdostrony'>Zgłoś błąd lub pomysł ulepszenia aplikacji!</a>

     <footer className='footerSecondSite'>General Public License<p className='skrytka-date'>Skrytka 2023</p>
     

     <div className="footerRealization">
    <div className="firstPatron">
      <h4>Projekt zrealizowany w ramach Olimpiady Zwolnieni z Teorii</h4>
      <img className='patronImg1' src="/img/logoZzt.png" alt="logo" />
    </div>
     

    <div className="secondPatron">
       <h4>Patronat Szkoły Głównej Służby Pożarniczej</h4>
        <img className='patronImg' src="/img/logoSgsp.png" alt="logo" />
     </div>


    </div>

    <div className="footerMedia">


      <div className="firstMedia">
        <h2>Media społecznościowe</h2>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>


      <div className="SecondMedia">
        <h2>Skontaktuj się z nami: </h2>
        <h3>Skrytka@Email.com</h3>
          
     </div>
    </div>
    
    
     
     </footer>

   </div>

    </>
   
  )
}
export default QuizGame;