import {withRouter} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

import {
  NavFootersContainer,
  NavLinks,
  NavLink,
  NavRoute,
  FooterContainer,
  FooterTitle,
  SocialMediaContainer,
  Image,
  FooterDescription,
  RouteLink,
} from './styledComponents'
import DarkModeContext from '../../context/ThemeContext'

const NavFooters = props => (
  <DarkModeContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {match} = props
      const {path} = match
      const activeRoute = path.slice(1)

      return (
        <NavFootersContainer dark={isDarkMode}>
          <NavLinks>
            <RouteLink className="link" to="/">
              <NavLink>
                <AiFillHome
                  color={
                    activeRoute === ''
                      ? 'red'
                      : `${isDarkMode ? '#fff' : '#000'}`
                  }
                />
                <NavRoute active={activeRoute === ''} dark={isDarkMode}>
                  Home
                </NavRoute>
              </NavLink>
            </RouteLink>
            <RouteLink className="link" to="/trending">
              <NavLink>
                <AiFillFire
                  color={
                    activeRoute === 'trending'
                      ? 'red'
                      : `${isDarkMode ? '#fff' : '#000'}`
                  }
                />
                <NavRoute active={activeRoute === 'trending'} dark={isDarkMode}>
                  Trending
                </NavRoute>
              </NavLink>
            </RouteLink>
            <RouteLink className="link" to="/gaming">
              <NavLink>
                <SiYoutubegaming
                  color={
                    activeRoute === 'gaming'
                      ? 'red'
                      : `${isDarkMode ? '#fff' : '#000'}`
                  }
                />
                <NavRoute active={activeRoute === 'gaming'} dark={isDarkMode}>
                  Gaming
                </NavRoute>
              </NavLink>
            </RouteLink>
            <RouteLink className="link" to="/saved-videos">
              <NavLink>
                <RiPlayListAddFill
                  color={
                    activeRoute === 'saved-videos'
                      ? 'red'
                      : `${isDarkMode ? '#fff' : '#000'}`
                  }
                />
                <NavRoute
                  active={activeRoute === 'saved-videos'}
                  dark={isDarkMode}
                >
                  Saved videos
                </NavRoute>
              </NavLink>
            </RouteLink>
          </NavLinks>
          <FooterContainer dark={isDarkMode}>
            <FooterTitle>CONTACT US</FooterTitle>
            <SocialMediaContainer>
              <Image
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <Image
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <Image
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </SocialMediaContainer>
            <FooterDescription>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </FooterContainer>
        </NavFootersContainer>
      )
    }}
  </DarkModeContext.Consumer>
)
export default withRouter(NavFooters)
