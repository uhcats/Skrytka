import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { QuizGetImage,QuizGetQuestion } from './GetImageAndQuestion';
import AppProvider from './AppContext';
import { EndCorrectAnswer } from './GetImageAndQuestion';
import Timer from './Timer';
import FooterQuiz from './FooterQuiz';
export let link = "";
console.log(link)

export let endScore = 1;

const NavigationQuiz = ({score}) => {
  link = /[^/]*$/.exec(`${window.location.href}`)[0];
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
          <QuizGetQuestion 
          isClick = {isClick} 
          setIsClick = {setIsClick} 
          score = {score}
          setScore = {setScore}
          navigate = {navigate}
           />  
         

          </AppProvider>
         
        </div>


      <div className="trackImgBox">
      <QuizGetImage 
      isClick = {isClick}  
      onPress={(e) => ButtonNextQuestionClick(e)}/>
      </div>
      
     
      <FooterQuiz/>

    </>
   
  )
}


export default QuizGame;