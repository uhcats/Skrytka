import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { useEffect} from 'react';




const QuizGetImage = () => {
  const handleCheckClick = (e) => {
    console.log(e.target);
    console.log('klik')
  }
  
  

    
  const QuizDataImageFromDb = [
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

  const data =  QuizDataImageFromDb.map(({img,boxStyle,boxStyle1,boxStyle2,boxStyle3}, index)=> {

   const {top,width,height,left,name} = boxStyle;
   const {top1,width1,height1,left1, name1} = boxStyle1;
   const {top2,width2,height2,left2, name2} = boxStyle2;
   const {top3,width3,height3,left3, name3} = boxStyle3;

    return (
      <>   
      <div className="boxElement">
      <div className="quiz_container">
        <img key = {index}src= {img} alt="track"/> 

        <button onClick = {handleCheckClick} className="quiz_button"  style = {{
          "width": width,
          "height": height,
          "top": top,
          "left": left,
        }}>{name}</button>


        <button className="quiz_button" onClick = {handleCheckClick}
        style = {{
          "width": width1,
          "height": height1,
          "top": top1,
          "left": left1,
        }}>{name1}</button>

        <button className="quiz_button" onClick = {handleCheckClick}
        style = {{
          "width": width2,
          "height": height2,
          "top": top2,
          "left": left2,
        }}>{name2}</button>

        <button className="quiz_button" onClick = {handleCheckClick} 
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


const QuizGetQuestion = () => {
  
  const QuizDataQuestionFromDb = [
    {
      question: "Gdzie jest prądownica turbo ?",
      coorectAnswer: 2,
    },
    
    {
      question: "Pytanie 2",
      coorectAnswer: 6,
    },
    {
      question: "Pytanie 3",
      coorectAnswer: 3,
    },
    {
      question: "Pytanie 4",
      coorectAnswer: 4,
    }
  ];

  let DrawQuestion = Math.floor(Math.random() * QuizDataQuestionFromDb.length);

  let EndDrawQuestion = QuizDataQuestionFromDb[DrawQuestion].question;
  return (
    <h1 className='questionText1'>{EndDrawQuestion}</h1>
  )
}

const ShowTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    let timer =   setInterval(() => {
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

  const ButtonNextQuestionClick = () => {
    setScore(score + 1);
    if(score === 9) {
      alert('koniec quizu')
    } else {
      
    }
  }



  
    
  return (
    <>
  
     <div id = 'navigationQuiz' className='navigation'>
     

    
    <img onClick = {() => navigate(-1)} id = 'imgArrow' className='imgArrow' src="/img/arrow-turn.png" alt="arrow" />


    <div className="timer">
    <i className="fa-regular fa-hourglass"></i>
    <ShowTimer/>
    </div>
      <h1 className = 'score'>{score}/10</h1>

     


     
      </div>
   
        <div className="question">
          <QuizGetQuestion/>  
      </div>


      <div className="trackImgBox">
      <QuizGetImage/>

      </div>
      <button onClick={ButtonNextQuestionClick} className='NextQuestionButton'>Następne pytanie</button>




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