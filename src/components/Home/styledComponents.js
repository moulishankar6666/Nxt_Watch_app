import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
`
export const HomeBodyContent = styled.div`
  height: calc(100vh - 60px);
  display: flex;
`
export const BodyContent = styled.div`
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
export const HomeBanner = styled.div`
  width: 100%;
  height: 200px;
  display: ${props => (props.hide ? 'none' : 'flex')};
  justify-content: space-between;
  padding: 20px 30px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  @media (max-width: 767px) {
    width: 95%;
    padding: 10px 10px;
  }
`

export const HomeBannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 300px;
  @media (max-width: 300px) {
    max-width: 150px;
  }
`

export const BannerLogo = styled.img`
  height: 30px;
  @media (max-width: 300px) {
    height: 25px;
  }
`
export const BannerDescription = styled.p`
  font-size: 15px;
  @media (max-width: 300px) {
    font-size: 13px;
  }
`
export const BannerButton = styled.button`
  outline: none;
  width: 80px;
  height: 30px;
  font-size: 10px;
  font-weight: bold;
  border: solid 1.5px #000;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 300px) {
    width: 80px;
  }
`
export const BannerCloseButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 20px;
  height: 20px;
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  height: 35px;
  width: 300px;
  margin-left: 20px;
  border: solid 1.5px grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 95%;
    max-width: 300px;
    align-self: flex-start;
  }
  @media (max-width: 350px) {
    margin-left: 0px;
  }
`
export const SearchInput = styled.input`
  height: 100%;
  width: 100px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 15px;
  padding-left: 10px;
  background-color: transparent;
  color: ${props => (props.dark ? '#fff' : '#000')};
`
export const SearchButton = styled.button`
  width: 60px;
  height: 100%;
  border: none;
  font-size: 25px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: grey;
  color: ${props => (props.dark ? '#fff' : '#000')};
`

export const HomePageVideosContainer = styled.ul`
  width: 100%;
  padding: 0px 10px;
  min-height: 40vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 95%;
  }
`
// loader

export const LoadContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
// failure

export const FailureContainer = styled.div`
  width: 100%;
  min-height: 60vh;
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
