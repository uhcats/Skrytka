
import React, {useRef} from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


export let InformationTrackFromDB = [
  {
    img: '../img/fire-truck/track1.jpg',
    name: "Wóz 1",
    progress: 70,
  },
  
  {
    img: '../img/fire-truck/track2.jpg',
    name: "Wóz 2",
    progress: 20,
  },
  {
    img: '../img/fire-truck/track3.jpg',
    name: "Wóz 3",
    progress: 0,
  }
];

const Truck = () => {

  const {id} = useParams();
  const [trackName, setTrackName] = useState('');
  const textChooseTrack = useRef(true);
  

  const handleImageClick = (e) => {

    const imgWithoutExtends = e.target.id.split(/\.(?=[^\.]+$)/);
    const TrackName = imgWithoutExtends[0].slice(18);
    setTrackName(TrackName);

    textChooseTrack.current.style.color= 'black';
  
  }  

  const handleArrowQuizClick = () => {
    if(trackName === "") {
      textChooseTrack.current.innerText = "Musisz wybrać wóz";
     textChooseTrack.current.style.color= 'red';
    
    }
  }




  const BoxComponent = () => {
    const track = InformationTrackFromDB.map(({img,name,progress},index)=> {

        return (
          <>
             

          <div className="boxTrack" key = {index} id = {img} onClick={handleImageClick} >


          <img className='imageFireTrack' id = {img}  src={img} alt="img" />


          <div className="informationAboutTrack">
            <h3 className= 'TrackName'>{name}</h3>
          

            <progress className="progress" max="100" value={progress}></progress>
            <div className='ScoringValueTrack'>
            <h4>{progress / 10}/10</h4>
            <h4>{progress}%</h4>
            </div>
            
          </div>
          
          </div>
          
        </>


        )
        
      });
      return (
        <>
           {track}
           <Link to = {trackName} style={{ textDecoration: 'none', color: 'black'}}>
            <i onClick={handleArrowQuizClick}  className="fa-solid fa-arrow-right"></i>
            </Link>
        </>
     
      )

  }


 
  return (
    <>

    <div className='SecondContainer'>

    <div className='navigation'>
    <Link to = '/'> <img className='imgArrow' src="../img/arrow-turn.png" alt="arrow" /></Link>
     
      <h1 className='unith1Id'>{id}</h1>
      <img className='skrytkaImage' src="../img/skrytka.png" alt="skrytka" />
    </div>


      <div className='containerTrack'>
        <h2 className='chooseCarH2' ref = {textChooseTrack}>{trackName ? `Wybrany wóz to:  ${trackName}`: "Wybierz wóz: "}</h2>
        <BoxComponent/>
      </div>


    <div className='FooterSecondSite'></div>
     
      <a className='a-write-to-us-1' href = '/linkdostrony'>Zgłoś błąd lub pomysł ulepszenia aplikacji!</a>

      <footer className='footerSecondSite'>General Public License<p className='skrytka-date'>Skrytka 2023</p></footer>

    </div>

    </>
    
      
  )
}

export default Truck;