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
    <div className='navigation'>
     
     <img onClick = {() => navigate(-1)} className='imgArrow' src="/img/arrow-turn.png" alt="arrow" />
    

    <div className="timer">
    <i className="fa-regular fa-hourglass"></i>
    <h1 className='timerTime'>{minutes < 10 ? "0"+minutes: minutes} : {seconds < 10 ? "0"+seconds: seconds}</h1>

    </div>
   
      
      <h1 className = 'score'>0/10</h1>

      </div>
  )
}
export default QuizGame;