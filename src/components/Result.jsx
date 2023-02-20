import React, {useContext} from 'react';
import { AppContext } from './AppContext';
import { endScore } from './QuizGame';
import { SecondSeconds } from './QuizGame';
import { SecondMinutes } from './QuizGame';

import { useNavigate } from 'react-router-dom';
const Result = () => {
  const {seconds, minutes} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
    <div className="container">
    <h2 className='congratulationh2'>BRAWO !!!</h2>
    <img className='trophy' src="\img\trophy.webp" alt="" />
    <h2 className='endScoreh2'>Twój wynik to: {endScore} / 10</h2>
    <h3>Czas: {SecondMinutes} minut {SecondSeconds} sekund</h3>
    {/* <h3 className='textDependsScore'>{endScore < 7 ? "Musisz jeszcze potrenować" : "Twoja wiedza jest git"}</h3> */}
    <button className='NextQuestionButton' onClick = {() => navigate(-1)}>Zagraj jeszcze raz</button>
    <button className='NextQuestionButton'onClick={() => navigate('/')}>Wróć do strony głównej</button>
    </div>
    </>
 
  )
}
export default Result;