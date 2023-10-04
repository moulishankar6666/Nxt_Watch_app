import {formatDistanceToNow} from 'date-fns'

import DarkModeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  Thumbnail,
  VideoDetailsContainer,
  ChannelProfile,
  VideoDetails,
  Title,
  ChannelName,
  ViewsAndPublishedDateContainer,
  Views,
  PublishedDuration,
  RouterLink,
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = video
  const duration = formatDistanceToNow(new Date(publishedAt)).split(' ')
  return (
    <DarkModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <RouterLink className="link" to={`/videos/${id}`}>
            <VideoItemContainer>
              <Thumbnail alt="video thumbnail" src={thumbnailUrl} />
              <VideoDetailsContainer dark={isDarkMode}>
                <ChannelProfile
                  alt="channel logo"
                  src={channel.profile_image_url}
                />
                <VideoDetails>
                  <Title>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <ViewsAndPublishedDateContainer>
                    <Views>{`${viewCount} views`}</Views>
                    <PublishedDuration>
                      {duration.slice(1).join(' ')}
                    </PublishedDuration>
                  </ViewsAndPublishedDateContainer>
                </VideoDetails>
              </VideoDetailsContainer>
            </VideoItemContainer>
          </RouterLink>
        )
      }}
    </DarkModeContext.Consumer>
  )
}
export default VideoItem
