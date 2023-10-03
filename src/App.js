import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/SavedVideos'
import DarkModeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

if (JSON.parse(localStorage.getItem('darkMode')) === undefined) {
  localStorage.setItem('darkMode', JSON.stringify(false))
}

class App extends Component {
  state = {
    darkMode: JSON.parse(localStorage.getItem('darkMode')),
  }

  onChangeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    return (
      <DarkModeContext.Provider
        value={{
          isDarkMode: darkMode,
          onChangeMode: this.onChangeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
        </Switch>
      </DarkModeContext.Provider>
    )
  }
}

export default App
