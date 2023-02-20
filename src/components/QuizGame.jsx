import {useNavigate} from 'react-router-dom';
import React, {useContext, useState} from 'react';
import { QuizGetImage,QuizGetQuestion } from './GetImageAndQuestion';
import AppProvider, { AppContext } from './AppContext';
import { EndCorrectAnswer } from './GetImageAndQuestion';
import Timer from './Timer';
import FooterQuiz from './FooterQuiz';
import { buttonQuiz } from './GetImageAndQuestion';
import { QuizDataImageFromDb } from './GetImageAndQuestion';

export let endScore = 1;


const NavigationQuiz = ({score}) => {
  const navigate = useNavigate();

  return (
    <div id = 'navigationQuiz' className='navigation'>
    <img onClick = {() => navigate(-1)} id = 'imgArrow' className='imgArrow' src="/img/arrow-turn.png" alt="arrow" />
    <div className="timer">
    <i className="fa-regular fa-hourglass"></i>
    <AppProvider>
    <Timer/>
  
    </AppProvider>
   
    </div>
      <h1 className = 'score'>{score}/10</h1>
      </div>
  )
  
 
}

const ButtonShowCorrectAnswer = (isClick, setIsClick, score,setScore,navigate) => {
  setIsClick(!isClick);
 
  if(isClick === false) 
    setScore(score + 1);
    if(score === 9) 
    navigate("/result");
    console.log(EndCorrectAnswer);
    // QuizDataImageFromDb.find((el,index) => {
    
    //     if(el.boxStyle.name === EndCorrectAnswer) {
    //       console.log(EndCorrectAnswer);
    //       console.log(el.boxStyle.name)
    //       console.log(el);
    //       el.boxStyle.style = "display:block";
    //     }
    // })

 ;



  
 
}






const QuizGame = () => {
  const navigate = useNavigate();
  const [score,setScore] = useState(0);
  const [isClick, setIsClick] = useState(true);
  
  const ButtonNextQuestionClick = (e) => {
    setScore(score + 1);
    if(score === 9) 
      navigate("/result");
     else if (e.target.textContent === EndCorrectAnswer)
        endScore++;
  }

  return (
    <>
  

      <NavigationQuiz score = {score} />
   
        <div className="question">
          <AppProvider>
          <QuizGetQuestion />  
          </AppProvider>
        </div>


      <div className="trackImgBox">
      <QuizGetImage 
      isClick = {isClick}  
      onPress={(e) => ButtonNextQuestionClick(e)}/>
      </div>
      
      <button onClick={() => ButtonShowCorrectAnswer(isClick, setIsClick , score , setScore, navigate)} className='NextQuestionButton'>{isClick ? "Pokaż odpowiedź" : "Następne pytanie"}</button>
      <FooterQuiz/>

    </>
   
  )
}


export default QuizGame;