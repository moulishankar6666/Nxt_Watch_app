import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const GamingBodyContent = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`
export const GamingVideos = styled.div`
  width: 80%;
  height: 100%;
  flex-grow: 1;
  background-color: ${props => (props.dark ? '#000' : '#fff')};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    overflow-y: auto;
  }
`
export const RouteBannerContainer = styled.div`
  width: 99%;
  display: flex;
  padding-left: 100px;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => (props.dark ? '#333' : '#cccccc')};
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const RouteHeading = styled.h1`
  font-size: 30px;
  color: ;
`
export const GameVideosListContainer = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 25px;
  flex-wrap: wrap;
`
export const RouterLink = styled(Link)`
  text-decoration: none;
  min-width: 180px;
  max-width: 400px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`
export const GameListItem = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
`
export const GameThumbnail = styled.img`
  width: 90%;
  display: block;
`
export const GameDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const GameTitle = styled.p`
  font-size: 15px;
`
export const GameViews = styled.p`
  font-size: 15px;
`

export const LoadContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const FailureImage = styled.img`
  height: 200px;
`
export const FailureHeading = styled.h1`
  font-size: 25px;
  text-align: center;
`
export const FailureDescription = styled.p`
  font-size: 15px;
  text-align: center;
  font-weight: 500;
`
export const FailureButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 10px;
  border: solid #000;
  font-weight: bold;
`
