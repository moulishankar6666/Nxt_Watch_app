import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: transparent;
`
export const Image = styled.img`
  height: 30px;
  @media (max-width: 300px) {
    height: 25px;
  }
`
export const NavLinksContainer = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  align-items: center;
  gap: 25px;
  @media (max-width: 300px) {
    gap: 10px;
  }
`
export const ChangeModeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const ProfileContainer = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
  }
`

export const HamburgerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  padding: 30px;
`
export const HamburgerNavLinks = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HamburgerIcon = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const NavLinks = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-size: 17px;
  gap: 20px;
`
export const RouteLink = styled(Link)`
  text-decoration: none;
`
export const NavLink = styled.li`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  list-style-type: none;
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const NavRoute = styled.p`
  font-size: 14px;
  color: ${props => (props.active ? 'red' : `${props.dark ? '#fff' : '#000'}`)};
  font-weight: ${props => (props.active ? '700' : '500')};
`

export const Profile = styled.img`
  height: 30px;
  display: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: flex;
  }
`
export const LogoutButtonContainer = styled.div`
  display: flex;
  font-size: 25px;
  display: flex;
  justify-content: center;
  }
`
export const LogoutButtonSm = styled.button`
  outline: none;
  display: flex;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutButtonLg = styled.button`
  outline: none;
  height: 30px;
  width: 100px;
  display: none;
  background-color: transparent;
  color: ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  border: solid 2px ${props => (props.dark ? '#f9f9f9' : '#0f0f0f')};
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(51, 51, 51, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const PopupContent = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 300px) {
    width: 250px;
    height: 150px;
    gap: 20px;
  }
`
export const PopupDescription = styled.p`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`
export const PopupButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`
export const PopupButton = styled.button`
  background-color: ${props =>
    props.outline === 'outline' ? 'transparent' : '#4f46e5'};
  border: solid 1.5px
    ${props => (props.outline === 'outline' ? '#000' : '#4f46e5')};
  color: ${props => (props.outline === 'outline' ? '#000' : '#fff')};
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-weight: bold;
`
