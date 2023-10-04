import styled from 'styled-components'
import ReactPlayer from 'react-player'

import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'

export const VideoDetailContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailBodyContent = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`
export const VideoDetailVideoInfo = styled.div`
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
export const VideoDetailsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
`
export const DisplayVideoContainer = styled.div`
  width: 95%;
`
export const DisplayVideo = styled(ReactPlayer)`
  width: 800px;
  height: 100%;
`
export const VideoInformationContainer = styled.div`
  width: 95%;
`
export const VideoTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`
export const VideoLikesAndViewsInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const Views = styled.p`
  font-size: 15px;
`
export const Published = styled.p`
  font-size: 15px;
`
export const LikesAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
export const IconContainer = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const LikeIcon = styled(AiFillLike)`
  font-size: 20px;
`
export const DislikeIcon = styled(AiFillDislike)`
  font-size: 20px;
`
export const SaveIcon = styled(RiPlayListAddFill)`
  font-size: 20px;
`
export const IconName = styled.button`
  font-size: 15px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`
export const HrLine = styled.hr`
  width: 95%;
  background-color: black;
`
export const ChannelInformationContainer = styled.div`
  width: 95%;
  display: flex;
  gap: 20px;
`
export const ChannelLogo = styled.img`
  height: 50px;
  padding: 3px;
  border: solid 1px #000;
  border-radius: 50%;
`
export const ChannelDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 600;
`
export const Subscribers = styled.p`
  font-size: 10px;
`
export const Description = styled.p`
  font-size: 10px;
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
