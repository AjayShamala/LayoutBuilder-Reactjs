import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showRightNavbar,
        showLeftNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContextss = () => {
        onToggleShowContent()
      }
      const onChangeToggleLeftBars = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightBar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="consumer-layout">
          <h1 className="head">Layout</h1>
          <input
            type="checkbox"
            id="conText"
            className="input-container"
            value={showContent}
            onChange={onChangeContextss}
          />
          <label htmlFor="conText" className="label-container">
            Content
          </label>
          <input
            type="checkbox"
            id="conTexts"
            value={showLeftNavbar}
            onChange={onChangeToggleLeftBars}
            className="input-container"
          />
          <label htmlFor="conTexts" className="label-container">
            Left Navbar
          </label>
          <input
            type="checkbox"
            id="conTextss"
            value={showRightNavbar}
            onChange={onChangeRightBar}
            className="input-container"
          />
          <label htmlFor="conTextss" className="label-container">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
