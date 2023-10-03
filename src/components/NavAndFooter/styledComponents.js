import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavFootersContainer = styled.div`
  width: 20%;
  min-width: 180px;
  max-width: 250px;
  min-height: calc(100vh - 60px);
  background-color: transparent;
  box-shadow: 1px 10px 16px -10px gray;
  padding: 30px 15px;
  gap: 100px;
  overflow-y: auto;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`
export const NavLinks = styled.ul`
  padding: 0px;
  width: 100%;
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
  gap: 10px;
  align-items: center;
`
export const NavRoute = styled.p`
  font-size: 14.5px;
  color: ${props => (props.active ? 'red' : `${props.dark ? '#fff' : '#000'}`)};
  font-weight: ${props => (props.active ? '700' : '500')};
`
export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const FooterTitle = styled.p`
  font-weight: bold;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Image = styled.img`
  height: 25px;
`
export const FooterDescription = styled.p`
  font-size: 13px;
`
