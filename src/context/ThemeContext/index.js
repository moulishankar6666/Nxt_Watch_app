import React from 'react'

const DarkModeContext = React.createContext({
  isDarkMode: false,
  onChangeMode: () => {},
  savedList: [],
  AddToSaveList: () => {},
})
export default DarkModeContext
