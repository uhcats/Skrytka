import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { useEffect, useContext} from 'react';
import { QuizGetImage,QuizGetQuestion } from './GetImageAndQuestion';
import AppProvider from './AppContext';
import { EndCorrectAnswer } from './GetImageAndQuestion';
import { AppContext } from './AppContext';



export let endScore = 1;
export let timer = "";
export let SecondSeconds = 1;
export let SecondMinutes = 0;
const ShowTimer = () => {


  const {seconds, setSeconds} = useContext(AppContext);
  const {minutes, setMinutes} = useContext(AppContext);
 
  useEffect(() => {
    timer =   setInterval(() => {
      SecondSeconds = seconds;
      SecondMinutes = minutes
      setSeconds(seconds + 1);

      if(seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
      }
   
    }, 1000);
  
  
    return () => clearInterval(timer);
  });
  
    return (
       <h1 className='timerTime'>{minutes < 10 ? "0"+minutes: minutes} : {seconds < 10 ? "0"+seconds: seconds}</h1>
    )
}



     



const QuizGame = () => {
  const navigate = useNavigate();
  const [score,setScore] = useState(0);
  const ButtonNextQuestionClick = (e) => {
    setScore(score + 1);
    if(score === 9) 
      navigate("/result");
     else if (e.target.textContent === EndCorrectAnswer)
        endScore++;
    
  }

  return (
    <>
  
     <div id = 'navigationQuiz' className='navigation'>
     
    <img onClick = {() => navigate(-1)} id = 'imgArrow' className='imgArrow' src="/img/arrow-turn.png" alt="arrow" />


    <div className="timer">
    <i className="fa-regular fa-hourglass"></i>
    <AppProvider>
    <ShowTimer/>

    </AppProvider>
   
    </div>
      <h1 className = 'score'>{score}/10</h1>

     


     
      </div>
   
        <div className="question">
          <AppProvider>
          <QuizGetQuestion />  
    
          </AppProvider>
          
      </div>


      <div className="trackImgBox">
      <QuizGetImage  onPress={(e) => ButtonNextQuestionClick(e)}/>

      </div>
      {/* <button onClick={ButtonNextQuestionClick} className='NextQuestionButton'>Następne pytanie</button> */}




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