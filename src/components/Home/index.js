import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import NavFooters from '../NavAndFooter'
import DarkModeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'

import {
  HomeRouteContainer,
  HomeBodyContent,
  BodyContent,
  HomeBanner,
  HomeBannerContentContainer,
  BannerLogo,
  BannerDescription,
  BannerButton,
  BannerCloseButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  HomePageVideosContainer,
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

class Home extends Component {
  state = {
    videoList: [],
    isBannerHide: false,
    searchValue: '',
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  convertingData = details => ({
    id: details.id,
    channel: details.channel,
    publishedAt: details.published_at,
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
  })

  getVideos = async () => {
    const {searchValue} = this.state
    const JwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    try {
      this.setState({status: apiStatus.progress})
      const response = await fetch(url, options)
      if (response.ok === true) {
        const data = await response.json()
        const HomepageVideosList = data.videos.map(video =>
          this.convertingData(video),
        )

        this.setState({
          videoList: HomepageVideosList,
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

  HideBanner = () => {
    this.setState({isBannerHide: true})
  }

  userSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  renderSuccessView = () => {
    const {videoList} = this.state
    if (videoList.length > 0) {
      return (
        <HomePageVideosContainer>
          {videoList.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </HomePageVideosContainer>
      )
    }
    return this.noSearchResults()
  }

  renderProgressView = () => (
    <LoadContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </LoadContainer>
  )

  renderFailureView = isDarkMode => (
    <FailureContainer dark={isDarkMode}>
      <FailureImage
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>We are having some trouble</FailureDescription>
      <FailureButton type="button" onClick={this.getVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  noSearchResults = isDarkMode => (
    <FailureContainer dark={isDarkMode}>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureHeading>No Search results found</FailureHeading>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <FailureButton type="button" onClick={this.getVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderVideos = isDarkMode => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccessView(isDarkMode)
      case apiStatus.progress:
        return this.renderProgressView()
      case apiStatus.failure:
        return this.renderFailureView(isDarkMode)

      default:
        return null
    }
  }

  render() {
    const {searchValue} = this.state
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {isBannerHide} = this.state
          return (
            <HomeRouteContainer dark={isDarkMode} data-testid="home">
              <Header />
              <HomeBodyContent>
                <NavFooters />
                <BodyContent dark={isDarkMode}>
                  <HomeBanner data-testid="banner" hide={isBannerHide}>
                    <HomeBannerContentContainer>
                      <BannerLogo
                        alt="nxt watch logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <BannerDescription>
                        Buy Nxt Watch Premium Prepaid plans with UPI
                      </BannerDescription>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </HomeBannerContentContainer>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.HideBanner}
                      type="button"
                    >
                      <AiOutlineClose />
                    </BannerCloseButton>
                  </HomeBanner>
                  <SearchBarContainer data-testid="searchButton">
                    <SearchInput
                      onChange={this.userSearchInput}
                      dark={isDarkMode}
                      type="search"
                    />
                    <SearchButton
                      data-testid="searchButton"
                      value={searchValue}
                      onClick={this.getVideos}
                      dark={isDarkMode}
                    >
                      <BiSearchAlt2 />
                    </SearchButton>
                  </SearchBarContainer>
                  {this.renderVideos(isDarkMode)}
                </BodyContent>
              </HomeBodyContent>
            </HomeRouteContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Home
