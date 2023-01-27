import React from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Truck = () => {
  const {id} = useParams();


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





  const BoxComponent = () => {

    const track = InformationTrackFromDB.map((item,index)=> {

        return (
        <div className="boxTrack" key = {index}>

        <img className='imageFireTrack' src={item.img} alt="" />

        <div className="informationAboutTrack">
          <h3 className= 'TrackName'>{item.name}</h3>
        

          <progress id="file" max="100" value={item.progress}></progress>
          <div className='ScoringValueTrack'>
          <h4>{item.progress / 10}/10</h4>
          <h4>{item.progress}%</h4>
          </div>
          
        </div>
        </div>
        )
        
      });
      return (
        track
      )

  }


 
  return (
    <>

    <div className='SecondContainer'>
    <searchBar />
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