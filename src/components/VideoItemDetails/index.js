import {Component} from 'react'

import NavAndFooters from '../NavAndFooter'
import Header from '../Header'

import {
  VideoDetailsContainer,
  VideoDetailsBodyContent,
  VideoDetailsVideoInfo,
} from './styledComponents'
import DarkModeContext from '../../context/ThemeContext'

class VideoItemDetails extends Component {
  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoDetailContainer
              dark={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailBodyContent>
                <NavAndFooters />
                <VideoDetailVideoInfo dark={isDarkMode}>
                  hello
                </VideoDetailVideoInfo>
              </VideoDetailBodyContent>
            </VideoDetailContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default VideoItemDetails
