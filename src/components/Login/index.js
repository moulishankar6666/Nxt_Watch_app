import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import DarkModeContext from '../../context/ThemeContext'

import {
  LoginRoute,
  LoginForm,
  WebsiteLogo,
  UserInputContainer,
  Label,
  Input,
  ShowPassword,
  CheckBox,
  CheckBoxLabel,
  Button,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isError: false,
    ErrorMsg: '',
  }

  onClickShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitUserDetails = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        const JwtToken = data.jwt_token
        Cookies.set('jwt_token', JwtToken, {expires: 30})
        history.replace('/')
      } else {
        this.setState({
          isError: true,
          ErrorMsg: data.error_msg,
        })
      }
    } catch (error) {
      this.setState({
        isError: true,
        ErrorMsg: `Check your connection : ${error.message}`,
      })
    }
  }

  render() {
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <DarkModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {
            username,
            password,
            showPassword,
            ErrorMsg,
            isError,
          } = this.state
          const logo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginRoute dark={isDarkMode}>
              <LoginForm dark={isDarkMode} onSubmit={this.onSubmitUserDetails}>
                <WebsiteLogo alt="website logo" src={logo} />
                <UserInputContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    onChange={this.onChangeUsername}
                    id="username"
                    type="text"
                    value={username}
                  />
                </UserInputContainer>
                <UserInputContainer>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    onChange={this.onChangePassword}
                    id="password"
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                  />
                  <ShowPassword>
                    <CheckBox
                      onChange={this.onClickShowPassword}
                      id="showPassword"
                      type="checkbox"
                      checked={showPassword}
                    />
                    <CheckBoxLabel htmlFor="showPassword">
                      Show Password
                    </CheckBoxLabel>
                  </ShowPassword>
                </UserInputContainer>
                <UserInputContainer>
                  <Button type="submit">Login</Button>
                  {isError && <ErrorMessage>{ErrorMsg}</ErrorMessage>}
                </UserInputContainer>
              </LoginForm>
            </LoginRoute>
          )
        }}
      </DarkModeContext.Consumer>
    )
  }
}
export default Login
