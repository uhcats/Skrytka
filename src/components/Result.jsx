import React from 'react';
import { endScore } from './QuizGame';
import { SecondSeconds } from './Timer';
import { SecondMinutes } from './Timer';

import { useNavigate } from 'react-router-dom';
import Conffetti from './Conffetti';
import Player from './Sound';
import url from '../style/congratulation.mp3'
const Result = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="container">
     
      <h2 className='congratulationh2'>BRAWO !!!</h2>
      <img className='trophy' src="\img\trophy.webp" alt="" />
      <h2 className='endScoreh2'>Twój wynik to: {endScore} / 10</h2>
      <h3>Czas: {SecondMinutes} minut {SecondSeconds} sekund</h3>
      <button className='NextQuestionButton' onClick = {() => navigate(-1)}>Zagraj jeszcze raz</button>
      <button className='NextQuestionButton'onClick={() => navigate('/')}>Wróć do strony głównej</button>
      <Conffetti/>
      <Player url = {url}/>
    </div>


 

    </>
 
  )
}
export default Result;