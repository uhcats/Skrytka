import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Truck = () => {
  const {id} = useParams();
  const [trackName, setTrackName] = useState('');

  const InformationTrackFromDB = [
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

  const handleImageClick = (e) => {

    const imgWithoutExtends = e.target.id.split(/\.(?=[^\.]+$)/);
    console.log(imgWithoutExtends)
    const TrackName = imgWithoutExtends[0].slice(18);
    console.log(TrackName)

    setTrackName(TrackName);
  }




  const BoxComponent = () => {


  
    
    const track = InformationTrackFromDB.map((item,index)=> {
      console.log(trackName)
        return (
          <>
              <Link to = {trackName} style={{ textDecoration: 'none', color: 'black'}}>

          <div className="boxTrack" key = {index} id = {item.img} onClick={handleImageClick} >

            
          <img   className='imageFireTrack' id = {item.img}  src={item.img} alt="img" />


          <div className="informationAboutTrack">
            <h3 className= 'TrackName'>{item.name}</h3>
          

            <progress className="progress" max="100" value={item.progress}></progress>
            <div className='ScoringValueTrack'>
            <h4>{item.progress / 10}/10</h4>
            <h4>{item.progress}%</h4>
            </div>
            
          </div>
          </div>


              </Link>
       
       
        </>


        )
        
      });
      return (
        track
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