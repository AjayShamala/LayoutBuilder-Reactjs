import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showLeftNavbar: true,
    showRightNavbar: true,
    showContent: true,
  }
  onToggleShowContent = () => {
    this.setState(previous => ({showContent: !previous.showContent}))
  }
  onToggleShowLeftNavbar = () => {
    this.setState(previous => ({showLeftNavbar: !previous.showLeftNavbar}))
  }
  onToggleShowRightNavbar = () => {
    this.setState(previous => ({showRightNavbar: !previous.showRightNavbar}))
  }
  render() {
    const {showContent, showRightNavbar, showLeftNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-contaianer">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
