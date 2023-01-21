import React, { useState } from 'react';

import './style/App.css';

function App() {
  let localizationFromDBArr = ['Kraków', 'Poznań', 'Warszawa', 'Gdańsk', 'Koszalin', 'Słupsk', 'Ktos'];
  const [isContainerActive, setIsContainerActive] = useState(false);
  const [unitOsp, setunitOsp] = useState("");

  const [localization, setLocalization] = useState(localizationFromDBArr);



  const handleToggleActive = () => {
    setIsContainerActive(!isContainerActive);
  }

  const handleLabelClick = (e) => {
    const nameOfUnit = e.target.getAttribute('name');
    setunitOsp(nameOfUnit);
    setIsContainerActive(!isContainerActive)


  }

  const handleChangeInput = (e) => {


    const searchText = e.target.value.toLowerCase();


    setLocalization(localization.filter(localization => localization.toLowerCase().includes(searchText)));


    if (searchText.length === 0) {
      setLocalization(localizationFromDBArr)
    }
  }
  const handleButtonClick = () => {
    if (unitOsp === "") {
      alert('Musisz wybrać jednostkę')
    }
  }








  const OptionJSXTag = () => {
    localization.sort();
    const showListFromArray = localization.map((item, index) => {


      return (
        <div onClick={handleLabelClick} name={item} key={index} className="option">
          <input type="radio" className="radio" name="localization" />
          <label htmlFor="">{item}</label>

        </div>
      )

    })


    return (
      showListFromArray
    )
  }

  return (
    <>

      <div className="container">
        <div className="logo">
          <img className='logoImage' src='img/Skrytka-Samologo.png' alt="" />
        </div>
        <h1 className='welcome'>Witaj!</h1>

        <div className="select-box">

          <div className={`options-container${isContainerActive ? " active" : ""}`}>
            <input onChange={handleChangeInput} className='inputSearch' type="text" placeholder='Search' />




            <OptionJSXTag />
          </div>


          <div onClick={handleToggleActive} className="selected">{unitOsp ? `Wybrana jednostka OSP: ${unitOsp}` : "Wyszukaj jednostkę OSP aby kontynuować"}</div>
        </div>


        <button onClick={handleButtonClick} className='btnUnit'>Przejdź dalej</button>


        <div className='FirstFooter'>Nie widzisz swojej jednostki? <li className='li-write-to-us'><a className='a-write-to-us' href="/track"> Napisz do nas!</a></li></div>
        <footer>@Wszelkie prawa zastrzeżone 2023 Skrytka.app<p className='skrytka-date'>Skrytka 2023</p></footer>
      </div>



    </>
  );

}

export default App;
