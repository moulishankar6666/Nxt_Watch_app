import {Component} from 'react'

import NavAndFooters from '../NavAndFooter'
import Header from '../Header'

import {
  GamingContainer,
  GamingBodyContent,
  GamingVideos,
} from './styledComponents'
import DarkModeContext from '../../context/ThemeContext'

class Gaming extends Component {
  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GamingContainer dark={isDarkMode} data-testid="gaming">
              <Header />
              <GamingBodyContent>
                <NavAndFooters />
                <GamingVideos dark={isDarkMode}>hello</GamingVideos>
              </GamingBodyContent>
            </GamingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Gaming
