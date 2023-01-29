import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Quiz = () => {
  const [isPopUpActive, setIsPopUpActive] = useState(true);
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

  const QuizComponent = () => {
    return (
      <h2>START QUIZU</h2>
    )
  }
  


  return (
    isPopUpActive ? <PopUp/> : <QuizComponent/>

  )
}

export default Quiz;