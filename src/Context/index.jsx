import { createContext, useState } from 'react'

export const SubjectContext = createContext()

export const SubjectContextProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(null)

  //Old Data from TaskContext
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  return (
    <SubjectContext.Provider value={{
      currentData,
      setCurrentData,
      dropdown1Value,
      dropdown2Value,
    }}>
      {children}
    </SubjectContext.Provider>
  )
}