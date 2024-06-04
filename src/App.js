import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showLeftBar: true,
    showRightBar: true,
    showContext: true,
  }
  onChangeContextss=()=>{
    this.setState((previous)=>({showContext:!previous.showContext}))
  }
  onChangeToggleLeftBars=()=>{
    this.setState((previous)=>({showLeftBar:!previous.showLeftBar}))
  }
  onChangeRightBar=()=>{
    this.setState((previous)=>({showRightBar:!previous.showRightBar}))
  }
  render(){
    const {showContext,showLeftBar,showRightBar}=this.state 
   return(
    <ConfigurationContext.Provider
     value={{
      showContext,
      showLeftBar,
      showRightBar,
      onChangeContextss:this.onChangeContextss,
      onChangeToggleLeftBars:this.onChangeToggleLeftBars,
      onChangeRightBar:this.onChangeRightBar
    }}
      >
      <div className="app-contaianer">
      <ConfigurationController/>
      <Layout/>
      </div>
        
    
    </ConfigurationContext.Provider>
   )
  }
}

export default App