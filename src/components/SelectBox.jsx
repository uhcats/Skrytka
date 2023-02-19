import React, {useContext, useState ,useRef} from 'react';
import { AppContext } from './AppContext';
const SearchBox = () => {

 
  const {unitOsp, isContainerActive, setunitOsp,setIsContainerActive,localization} = useContext(AppContext);
  const [value, setValue] = useState("");
  const inputSearchRef = useRef(true);

  const handleChangeInput = (e) => {
    setIsContainerActive(true);
    const tasks = localization.filter(localization => localization.toLowerCase().includes(e.target.value.toLowerCase()));
      setValue(tasks); 
  }

  const OptionJSXTag = () => {
    let showListFromArray;
    if(value.length > 0){
     showListFromArray = value.map((item, index) => {
      

        return (
          <div onClick={handleLabelClick} name={item} key={index} className="option">
            <input type="radio" className="radio" name="localization" />
           {item}
  
          </div>
        )
  
      })
        
    }
   


    return (
      showListFromArray
    )
  }
    
    


  const handleLabelClick = (e) => {
    const nameOfUnit = e.target.getAttribute('name');
    setunitOsp(nameOfUnit);
    setIsContainerActive(!isContainerActive);
    inputSearchRef.value = "";
  }
  
  


  const unitOspActive = unitOsp ? `Wybrana jednostka OSP: ${unitOsp}` : "Wyszukaj jednostkę OSP aby kontynuować";


  return (
    <div className="select-box">

              <h3 className='OspUnitText'>{unitOspActive}</h3>

       
             
                <input onChange={handleChangeInput} className='inputSearch' ref = {inputSearchRef} type="text" placeholder='Search' />
             
           
         

            
          <div className={`options-container${isContainerActive ? " active" : ""}`}>
            <ul className='ulInputSearch'>
              
            </ul>

            <OptionJSXTag/>
          </div>


        
        </div>
  )
}

export default SearchBox;