import {Component} from 'react'
import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {AiFillHome, AiOutlineClose, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {RiSunFill, RiPlayListAddFill} from 'react-icons/ri'

import DarkModeContext from '../../context/ThemeContext'

import {
  NavBar,
  Image,
  NavLinksContainer,
  ChangeModeButton,
  ProfileContainer,
  HamburgerContainer,
  HamburgerNavLinks,
  HamburgerIcon,
  NavLinks,
  NavLink,
  NavRoute,
  Profile,
  LogoutButtonContainer,
  LogoutButtonSm,
  LogoutButtonLg,
  PopupContainer,
  PopupContent,
  PopupDescription,
  PopupButtonContainer,
  PopupButton,
  RouteLink,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode, onChangeMode} = value
          const logo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const {match} = this.props
          const {path} = match
          const activeRoute = path.slice(1)
          return (
            <NavBar dark={isDarkMode}>
              <RouteLink to="/">
                <Image alt="website logo" src={logo} />
              </RouteLink>
              <NavLinksContainer>
                {/* changeMode-----------------------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
                <ChangeModeButton
                  data-testid="theme "
                  onClick={() => onChangeMode()}
                >
                  {isDarkMode ? (
                    <RiSunFill color={isDarkMode ? '#fff' : '#000'} size={30} />
                  ) : (
                    <FaMoon color={isDarkMode ? '#fff' : '#000'} size={25} />
                  )}
                </ChangeModeButton>
                {/* changeMode---------------------------------------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

                {/* profile and Hamburger---------------------------------vvvvvvvvvvvvvvvvvvvvvvvvvv */}
                <ProfileContainer>
                  <Popup
                    modal
                    trigger={
                      <HamburgerIcon type="button">
                        <GiHamburgerMenu
                          color={isDarkMode ? '#fff' : '#000'}
                          size={25}
                          className="hamburger"
                        />
                      </HamburgerIcon>
                    }
                  >
                    {close => (
                      <HamburgerContainer dark={isDarkMode}>
                        <HamburgerIcon
                          dark={isDarkMode}
                          onClick={() => close()}
                        >
                          <AiOutlineClose size={20} />
                        </HamburgerIcon>
                        <HamburgerNavLinks>
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
                                <NavRoute
                                  active={activeRoute === ''}
                                  dark={isDarkMode}
                                >
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
                                <NavRoute
                                  active={activeRoute === 'trending'}
                                  dark={isDarkMode}
                                >
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
                                <NavRoute
                                  active={activeRoute === 'gaming'}
                                  dark={isDarkMode}
                                >
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
                        </HamburgerNavLinks>
                      </HamburgerContainer>
                    )}
                  </Popup>
                  <Profile
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </ProfileContainer>

                {/* profile and Hamburger--------------------------- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

                {/* Logout section ----------------------------------vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv */}
                <Popup
                  modal
                  trigger={
                    <LogoutButtonContainer>
                      <LogoutButtonSm color={isDarkMode ? '#fff' : '#000'}>
                        <FiLogOut
                          color={isDarkMode ? '#fff' : '#000'}
                          size={30}
                        />
                      </LogoutButtonSm>
                      <LogoutButtonLg dark={isDarkMode} type="button">
                        Logout
                      </LogoutButtonLg>
                    </LogoutButtonContainer>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer>
                      <PopupContent>
                        <PopupDescription>
                          Are you sure, you want to logout
                        </PopupDescription>
                        <PopupButtonContainer>
                          <PopupButton
                            outline="outline"
                            onClick={() => close()}
                            type="button"
                          >
                            Cancel
                          </PopupButton>
                          <PopupButton
                            onClick={this.onClickLogout}
                            outline="fill"
                            type="button"
                          >
                            Confirm
                          </PopupButton>
                        </PopupButtonContainer>
                      </PopupContent>
                    </PopupContainer>
                  )}
                </Popup>
                {/* Logout section--------------------------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              </NavLinksContainer>
            </NavBar>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default withRouter(Header)
