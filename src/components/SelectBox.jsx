import React, {useContext} from 'react';

import { AppContext } from './AppContext';
const SearchBox = () => {


  const {unitOsp, isContainerActive, setunitOsp,setIsContainerActive,localization,setLocalization,localizationFromDBArr} = useContext(AppContext);




  const handleChangeInput = (e) => {

    

    setLocalization(localization.filter(localization => localization.toLowerCase().includes(e.target.value.toLowerCase())));

    if (e.target.value === "") {
      setLocalization(localizationFromDBArr);
    }
  }


  const handleLabelClick = (e) => {
    const nameOfUnit = e.target.getAttribute('name');
    setunitOsp(nameOfUnit);
    setIsContainerActive(!isContainerActive)


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



  

  
  const unitOspActive = unitOsp ? `Wybrana jednostka OSP: ${unitOsp}` : "Wyszukaj jednostkę OSP aby kontynuować";

  return (
    <div className="select-box">

          <div className={`options-container${isContainerActive ? " active" : ""}`}>
            <ul className='ulInputSearch'>
              <input onChange={handleChangeInput} className='inputSearch' type="text" placeholder='Search' />
            </ul>

            <OptionJSXTag />
          </div>


          <div onClick={() => setIsContainerActive(!isContainerActive)} className="selected">{unitOspActive}</div>
        </div>
  )
}

export default SearchBox;