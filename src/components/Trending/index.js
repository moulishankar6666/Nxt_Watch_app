import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import NavAndFooters from '../Sidebar'
import Header from '../Header'
import DarkModeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'

import {
  TrendingContainer,
  TrendingBodyContent,
  TrendingVideos,
  RouteHeading,
  RouteBannerContainer,
  TrendingVideosContainer,
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

class Trending extends Component {
  state = {
    TrendingList: [],
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  convertingData = details => ({
    id: details.id,
    channel: details.channel,
    publishedAt: details.published_at,
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
  })

  getTrendingVideos = async () => {
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/trending`
    try {
      this.setState({status: apiStatus.progress})
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()

        const TrendingPageVideosList = data.videos.map(video =>
          this.convertingData(video),
        )

        this.setState({
          TrendingList: TrendingPageVideosList,
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

  compoundWillUnmount() {
    this.setState({status: apiStatus.failure, TrendingList: []})
  }

  renderSuccessView = () => {
    const {TrendingList} = this.state
    return (
      <TrendingVideosContainer>
        {TrendingList.map(video => (
          <VideoItem key={video.id} video={video} />
        ))}
      </TrendingVideosContainer>
    )
  }

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
          const {isDarkMode} = value
          return (
            <TrendingContainer dark={isDarkMode} data-testid="trending">
              <Header />
              <TrendingBodyContent>
                <NavAndFooters />
                <TrendingVideos dark={isDarkMode}>
                  <RouteBannerContainer data-testid="banner" dark={isDarkMode}>
                    <AiFillFire size={30} color="red" />
                    <RouteHeading>Trending</RouteHeading>
                  </RouteBannerContainer>

                  {this.renderVideos()}
                </TrendingVideos>
              </TrendingBodyContent>
            </TrendingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Trending
