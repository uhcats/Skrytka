import React, { createContext, useState } from 'react';

export const AppContext = createContext();



const AppProvider = ({ children }) => {
  let localizationFromDBArr = ['Kraków', 'Poznań', 'Warszawa', 'Gdańsk', 'Koszalin', 'Słupsk', 'Gdynia'];

  const [unitOsp, setunitOsp] = useState("");
  const [isContainerActive, setIsContainerActive] = useState(true);
  const [localization, setLocalization] = useState(localizationFromDBArr);
  const [isPopUpActive, setIsPopUpActive] = useState(true);


  return (
    <AppContext.Provider value={{
      unitOsp,
      setunitOsp,
      isContainerActive,
      setIsContainerActive,
      localization,
      setLocalization,
      localizationFromDBArr,
      isPopUpActive,
      setIsPopUpActive
    }}>
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider