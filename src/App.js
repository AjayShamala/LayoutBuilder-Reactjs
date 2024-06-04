import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showLeftBar: true,
    showRightBar: true,
    showContent: true,
  }
  onToggleShowContent = () => {
    this.setState(previous => ({showContent: !previous.showContent}))
  }
  onToggleShowLeftNavbar = () => {
    this.setState(previous => ({showLeftBar: !previous.showLeftBar}))
  }
  onToggleShowRightNavbar = () => {
    this.setState(previous => ({showRightBar: !previous.showRightBar}))
  }
  render() {
    const {showContent, showLeftBar, showRightBar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftBar,
          showRightBar,
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
