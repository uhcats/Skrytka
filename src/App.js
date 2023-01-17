import React, { useState } from 'react';

import './App.css';

function App() {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const [unitOsp, setunitOsp] = useState("");
  const localizationFromDBArr = ['Kraków', 'Poznań', 'Warszawa', 'Gdańsk', 'Koszalin', 'Słupsk', 'Ktos'];

  const handleToggleActive = () => {
    setIsContainerActive(!isContainerActive);
  }

  const handleLabelClick = (e) => {
    const nameOfUnit = e.target.getAttribute('name');
    setunitOsp(nameOfUnit);
    setIsContainerActive(!isContainerActive)


  }
  const handleButtonMoveToClick = () => {
    if (unitOsp === "") {
      alert('Wybierz jednostkę OSP');
    } else {
      // Przekierowanie
    }
  }


  const OptionJSXTag = () => {
    localizationFromDBArr.sort();
    const showListFromArray = localizationFromDBArr.map((item, index) => {
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
          <img className='logoImage' src="img/logo.png" alt="" />
        </div>
        <h1 className='welcome'>Witaj!</h1>

        <div className="select-box">

          <div className={`options-container${isContainerActive ? " active" : ""}`}>
            {/* <div className="option">
              <input className='inputSearch' type="text" placeholder='Search' />
            </div> */}

            <OptionJSXTag />
          </div>


          <div onClick={handleToggleActive} className="selected">{unitOsp ? `Wybrana jednostka OSP to: ${unitOsp}` : "Wyszukaj jednostkę OSP aby kontynuować"}</div>
        </div>



        <button className='btnUnit' onClick={handleButtonMoveToClick}>Przejdź dalej</button>


        <div className='FirstFooter'>Nie widzisz swojej jednostki? <li className='li-write-to-us'><a className='a-write-to-us' href="/track"> Napisz do nas!</a></li></div>
        <footer>@Wszelkie prawa zastrzeżone 2023 Skrytka.app<p className='skrytka-date'>Skrytka 2023</p></footer>
      </div>



    </>
  );

}

export default App;
