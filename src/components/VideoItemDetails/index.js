import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import NavAndFooters from '../Sidebar'
import Header from '../Header'

import DarkModeContext from '../../context/ThemeContext'
import {
  VideoDetailContainer,
  VideoDetailBodyContent,
  VideoDetailVideoInfo,
  VideoDetailsMainContainer,
  DisplayVideoContainer,
  DisplayVideo,
  VideoInformationContainer,
  VideoTitle,
  VideoLikesAndViewsInfo,
  ViewsContainer,
  Views,
  Published,
  LikesAndSaveContainer,
  IconContainer,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  IconName,
  HrLine,
  ChannelLogo,
  ChannelDetails,
  ChannelInformationContainer,
  ChannelName,
  Subscribers,
  Description,
  LoadContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}
const True = true
class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  convertingData = details => ({
    id: details.id,
    channel: details.channel,
    description: details.description,
    publishedAt: details.published_at,
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    videoUrl: details.video_url,
    viewCount: details.view_count,
    like: false,
    dislike: false,
    isSaved: false,
  })

  getVideoDetails = async () => {
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    try {
      this.setState({status: apiStatus.progress})
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        const updatedVideoDetails = this.convertingData(data.video_details)
        this.setState({
          videoDetails: updatedVideoDetails,
          status: apiStatus.success,
        })
      } else {
        this.setState({
          status: apiStatus.failure,
        })
      }
    } catch (error) {
      this.setState({
        status: apiStatus.failure,
      })
    }
  }

  onClickLikeButton = () => {
    const {videoDetails} = this.state
    const {like} = videoDetails
    this.setState(prevState => ({
      videoDetails: {
        ...prevState.videoDetails,
        dislike: false,
        like: like ? false : True,
      },
    }))
  }

  onClickDislikeButton = () => {
    const {videoDetails} = this.state
    const {dislike} = videoDetails
    this.setState(prevState => ({
      videoDetails: {
        ...prevState.videoDetails,
        like: false,
        dislike: dislike ? false : True,
      },
    }))
  }

  onClickSaveButton = () => {
    const {videoDetails} = this.state
    const {save} = videoDetails

    this.setState(prevState => ({
      videoDetails: {
        ...prevState.videoDetails,
        isSaved: !prevState.videoDetails.isSaved,
      },
    }))
  }

  compoundWillUnmount() {
    this.setState({status: apiStatus.failure, videoDetails: {}})
  }

  renderSuccessView = AddToSaveList => {
    const {videoDetails} = this.state
    const {
      channel,
      title,
      description,
      viewCount,
      videoUrl,
      publishedAt,
      like,
      dislike,
      isSaved,
    } = videoDetails
    const duration = formatDistanceToNow(new Date(publishedAt)).split(' ')
    return (
      <VideoDetailsMainContainer>
        <DisplayVideoContainer>
          <DisplayVideo
            url={videoUrl.replace('http', 'https')}
            controls
            width="100%"
          />
        </DisplayVideoContainer>
        <VideoInformationContainer>
          <VideoTitle>{title}</VideoTitle>
          <VideoLikesAndViewsInfo>
            <ViewsContainer>
              <Views>{viewCount}</Views>
              <Published>{duration.slice(1).join('')}</Published>
            </ViewsContainer>
            <LikesAndSaveContainer>
              <IconContainer isActive={like} onClick={this.onClickLikeButton}>
                <LikeIcon />
                <IconName isActive={like}>Like</IconName>
              </IconContainer>
              <IconContainer
                isActive={dislike}
                onClick={this.onClickDislikeButton}
              >
                <DislikeIcon />
                <IconName isActive={dislike}>Dislike</IconName>
              </IconContainer>
              <IconContainer
                isActive={isSaved}
                onClick={this.onClickSaveButton}
              >
                <SaveIcon />
                <IconName
                  type="button"
                  onClick={() => AddToSaveList(videoDetails)}
                  isActive={isSaved}
                >
                  {isSaved ? 'Saved' : 'Save'}
                </IconName>
              </IconContainer>
            </LikesAndSaveContainer>
          </VideoLikesAndViewsInfo>
        </VideoInformationContainer>
        <HrLine />
        <ChannelInformationContainer>
          <ChannelLogo alt="channel logo" src={channel.profile_image_url} />
          <ChannelDetails>
            <ChannelName>{channel.name}</ChannelName>
            <Subscribers>{channel.subscriber_count}</Subscribers>
            <Description>{description}</Description>
          </ChannelDetails>
        </ChannelInformationContainer>
      </VideoDetailsMainContainer>
    )
  }

  renderVideos = AddToSaveList => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccessView(AddToSaveList)
      case apiStatus.progress:
        return this.renderProgressView()
      case apiStatus.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  renderProgressView = () => (
    <LoadContainer data-testid="loader">
      <Loader color="#3b82f6" type="ThreeDots" width={50} height={50} />
    </LoadContainer>
  )

  renderFailureView = isDarkMode => (
    <FailureContainer dark={isDarkMode}>
      <FailureImage
        alt="failure view"
        src={
          isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>We are having some trouble</FailureDescription>
      <FailureButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode, AddToSaveList} = value
          return (
            <VideoDetailContainer
              dark={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailBodyContent>
                <NavAndFooters />
                <VideoDetailVideoInfo dark={isDarkMode}>
                  {this.renderVideos(AddToSaveList)}
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
