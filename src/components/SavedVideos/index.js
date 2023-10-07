import {Component} from 'react'

import NavAndFooters from '../Sidebar'
import Header from '../Header'

import {SavedContainer, SavedBodyContent, SavedVideos} from './styledComponents'
import DarkModeContext from '../../context/ThemeContext'

class Saved extends Component {
  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode, savedList} = value
          console.log(savedList)
          return (
            <SavedContainer dark={isDarkMode} data-testid="home">
              <Header />
              <SavedBodyContent>
                <NavAndFooters />
                <SavedVideos dark={isDarkMode}>hello</SavedVideos>
              </SavedBodyContent>
            </SavedContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Saved
