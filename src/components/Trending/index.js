import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import NavAndFooters from '../NavAndFooter'
import Header from '../Header'
import DarkModeContext from '../../context/ThemeContext'

import {
  LoadContainer,
  TrendingContainer,
  TrendingBodyContent,
  TrendingVideos,
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

  renderVideos = () => {
    const {status, TrendingList} = this.state

    switch (status) {
      //   case apiStatus.success:
      //     return this.renderSuccessView()
      case apiStatus.progress:
        return this.renderProgressView()

      default:
        return null
    }
  }

  renderProgressView = () => (
    <LoadContainer>
      <Loader color="#3b82f6" type="ThreeDots" width={50} height={50} />
    </LoadContainer>
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
                <TrendingVideos dark={isDarkMode}>hello</TrendingVideos>
              </TrendingBodyContent>
            </TrendingContainer>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Trending
