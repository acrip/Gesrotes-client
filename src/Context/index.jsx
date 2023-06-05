import { createContext, useState } from 'react'

export const SubjectContext = createContext()

export const SubjectContextProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState(null)
  return (
    <SubjectContext.Provider value={{
      currentData,
      setCurrentData,
    }}>
      {children}
    </SubjectContext.Provider>
  )
}