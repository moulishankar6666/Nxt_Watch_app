import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RouterLink = styled(Link)`
  text-decoration: none;
  width: 220px;
  height: 280px;
  max-width: 400px;
  flex-grow: 1;
`

export const VideoItemContainer = styled.li`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  list-style-type: none;
`
export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  padding: 10px;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const ChannelProfile = styled.img`
  height: 40px;
  border: solid 1.5px #000;
  border-radius: 50%;
`
export const VideoDetails = styled.div`
  width: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Title = styled.p`
  font-size: 12px;
`
export const ChannelName = styled.p`
  font-size: 11px;
  font-weight: 500;
  opacity: 0.7;
`
export const ViewsAndPublishedDateContainer = styled.div`
  display: flex;
  gap: 20px;
  opacity: 0.8;
`
export const Views = styled.p`
  font-size: 10px;
`
export const PublishedDuration = styled.p`
  font-size: 10px;
`
