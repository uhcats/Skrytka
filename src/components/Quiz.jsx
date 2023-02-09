import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import QuizGame from './QuizGame';

const Quiz = () => {
  const [isPopUpActive, setIsPopUpActive] = useState(false);
  const navigate = useNavigate();

  const PopUp = () => {
    return (
      <div className="quizContainer">
      <div className="popup">
              <h1 className='startQuizText'>Zacznij Quiz !</h1>

              
              <div className="twoButton">
              <button onClick={() => setIsPopUpActive(false)} className='startQuizBtn'>Start</button>
              
              <button onClick = {() => navigate(-1)} className='backSiteQuizBtn'>Wróc do poprzedniej strony</button>
            
            
              </div>
           
            </div>

      </div>
     
    )
  }


  


  return (
    isPopUpActive ? <PopUp/> : <QuizGame/>

  )
}

export default Quiz;