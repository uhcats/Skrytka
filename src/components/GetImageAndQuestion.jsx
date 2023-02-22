import React, {useRef} from 'react';

export let EndCorrectAnswer = "";
export let buttonQuiz = "";

let buttonsElement = "";
let EndDrawQuestion = "";
let ButtonShowCorrectAnswer = "";

export const QuizGetQuestion = ({score,isClick,setScore,setIsClick,navigate}) => {
 
  const QuizDataQuestionFromDb = [
    {
      question: "Pytanie 1",
      coorectAnswer: "Kabina",
    },
    
    {
      question: "Pytanie 2",
      coorectAnswer: "Dach",
    },
    {
      question: "Pytanie 3",
      coorectAnswer: "Dowódca 3",
    },
    {
      question: "Pytanie 4",
      coorectAnswer: "Kierowca 3",
    }
  ];




   let DrawQuestion = Math.floor(Math.random() * QuizDataQuestionFromDb.length);

  if(isClick === true) {
    EndDrawQuestion = QuizDataQuestionFromDb[DrawQuestion].question;
  }
 
    EndCorrectAnswer = QuizDataQuestionFromDb[DrawQuestion].coorectAnswer;
  
    return (
      <div className="questionDiv">
    <h1 className='questionText1'>{EndDrawQuestion}</h1>  
    <button onClick={() => ButtonShowCorrectAnswer(isClick, setIsClick , score , setScore, navigate)} className='NextQuestionButton'>{isClick ? "Pokaż odpowiedź" : "Następne pytanie"}</button>
      </div>
  
  )
}

export const QuizDataImageFromDb = [
  {
    img: '/img/fire-truck/img1.jpg',
    boxStyle: {
        name: "Kierowca 1",
        top: "48%",
        left: "49%",
        height: "39%",
        width: "15.5%",
    },
    boxStyle1: {
      name1: "Kierowca 3",
      top1: "45%",
      left1: "83%",
      height1: "35%",
      width1: "13%",
    },
      boxStyle2: {
        name2: "Kierowca 2",
        top2: "40%",
        left2: "67%",
        height2: "23%",
        width2: "18%",
    },
    boxStyle3: {
      name3: "Kabina",
      top3: "38%",
      left3: "30%",
      height3: "35%",
      width3: "13%",
    }
  },
  {
    img: '/img/fire-truck/imgTrack2.jpg',
    boxStyle: {
      name: "Dach",
      top: "48%",
      left: "69%",
      height: "35%",
      width: "35%",
  },boxStyle1: {
    width: 0,
    height: 0,
  },
    boxStyle2: {   
      width: 0,
      height: 0,
    },
    boxStyle3: {   
      width: 0,
      height: 0,
    },
  },
  {
    img: '/img/fire-truck/imgTrack4.jpg',
    boxStyle: {
      name: "Dowódca 3",
      top: "50%",
      left: "15%",
      height: "39%",
      width: "15.5%",
  },
  boxStyle1: {
    name1: "Dowódca 2",
    top1: "42%",
    left1: "32%",
    height1: "24%",
    width1: "18%",
  },
  boxStyle2: {
    name2: "Dowódca 1",
    top2: "52%",
    left2: "49%",
    height2: "39%",
    width2: "14%",
  },
  boxStyle3: {
    top2: "50%",
    left2: "49%",
    height2: "0",
    width2: "0",
  },

  },

  {
    img: '/img/fire-truck/imgTrack3.jpg',
    boxStyle: {
      name: "Tył",
      top: "42%",
      left: "50.5%",
      height: "41%",
      width: "18%",
  },
  boxStyle1: {},
  boxStyle2: {},
  boxStyle3: {},
  }
];

export const QuizGetImage = ({onPress, isClick}) => {
  buttonQuiz = useRef();
 

  const data =  QuizDataImageFromDb.map(({img,boxStyle,boxStyle1,boxStyle2,boxStyle3}, index)=> {

   let {top,width,height,left,name} = boxStyle;
   let {top1,width1,height1,left1, name1} = boxStyle1;
   let {top2,width2,height2,left2, name2} = boxStyle2;
   let {top3,width3,height3,left3, name3} = boxStyle3;
   
   
    ButtonShowCorrectAnswer = (isClick, setIsClick, score,setScore,navigate) => {
      buttonsElement = document.querySelectorAll('.quiz_button');
      const buttonsElementArray = Array.from(buttonsElement)
      setIsClick(!isClick);
    if(isClick === true) {
      buttonsElementArray.forEach(button => {
        console.log(button)
        if(EndCorrectAnswer === button.name){
        button.style.color = "yellow";
        button.style.pointerEvents = "none";
        button.style.display = "block";
        }else {
          button.style.pointerEvents = "none";
          button.style.display = "none";
        }
      })
    }else {
      buttonsElementArray.forEach(button => {
        button.style.color = "black";
        button.style.display = "block";
      })
    }
   
 
  }

    return (
      <>   
      <div className="boxElement">
      <div className="quiz_container">
      
        <img key = {index}src= {img} alt="track"/> 

        <button ref = {buttonQuiz} name = {name} onClick = {onPress} className="quiz_button"  style = {{
          "width": width,
          "height": height,
          "top": top,
          "left": left,
        }}>{name}</button>


        <button ref = {buttonQuiz} name = {name1}  className="quiz_button" onClick = {onPress} 
        style = {{
          "width": width1,
          "height": height1,
          "top": top1,
          "left": left1,
        }}>{name1}</button>

        <button ref = {buttonQuiz} name = {name2}  className="quiz_button" onClick = {onPress}
        style = {{
          "width": width2,
          "height": height2,
          "top": top2,
          "left": left2,
        }}>{name2}</button>

        <button ref = {buttonQuiz} name = {name3}  className="quiz_button" onClick = {onPress}
         style = {{
          "width": width3,
          "height": height3,
          "top": top3,
          "left": left3,
        }}>{name3}</button>
  

      </div>
      </div>
   
       
    
    </>
    )
    
  });

  return (
    data
  )
}