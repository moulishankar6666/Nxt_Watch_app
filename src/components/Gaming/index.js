import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import NavAndFooters from '../Sidebar'
import Header from '../Header'

import {
  GamingContainer,
  GamingBodyContent,
  GamingVideos,
  RouteHeading,
  RouteBannerContainer,
  GameVideosListContainer,
  RouterLink,
  GameListItem,
  GameThumbnail,
  GameDetailsContainer,
  GameTitle,
  GameViews,
  LoadContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'
import DarkModeContext from '../../context/ThemeContext'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  convertingData = details => ({
    id: details.id,
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
  })

  getGamingVideos = async () => {
    this.setState({status: apiStatus.progress})
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/gaming`
    try {
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        const VideosList = data.videos.map(video => this.convertingData(video))
        this.setState({
          gamesList: VideosList,
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

  gameItem = game => {
    const {id, thumbnailUrl, viewCount, title} = game
    return (
      <RouterLink key={id} to={`/videos/${id}`}>
        <GameListItem>
          <GameThumbnail alt="video thumbnail" src={thumbnailUrl} />
          <GameDetailsContainer>
            <GameTitle>{title}</GameTitle>
            <GameViews>{`${viewCount} Views`}</GameViews>
          </GameDetailsContainer>
        </GameListItem>
      </RouterLink>
    )
  }

  renderSuccessView = () => {
    const {gamesList} = this.state
    return (
      <GameVideosListContainer>
        {gamesList.map(game => this.gameItem(game))}
      </GameVideosListContainer>
    )
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
      <FailureButton type="button" onClick={this.getGamingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderVideos = () => {
    const {status} = this.state

    switch (status) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.progress:
        return this.renderProgressView()
      case apiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GamingContainer dark={isDarkMode} data-testid="gaming">
              <Header />
              <GamingBodyContent>
                <NavAndFooters />
                <GamingVideos dark={isDarkMode}>
                  <RouteBannerContainer data-testid="banner" dark={isDarkMode}>
                    <SiYoutubegaming size={30} color="red" />
                    <RouteHeading>Gaming</RouteHeading>
                  </RouteBannerContainer>
                  {this.renderVideos()}
                </GamingVideos>
              </GamingBodyContent>
            </GamingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Gaming
