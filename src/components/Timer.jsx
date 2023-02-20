import React, {useState, useEffect} from 'react';


export let SecondSeconds = 1;
export let SecondMinutes = 0;



const Timer = () => {


  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
 
  useEffect(() => {
    let timer =   setInterval(() => {
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

export default Timer;