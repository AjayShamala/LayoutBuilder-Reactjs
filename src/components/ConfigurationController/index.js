import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const ConfigurationController = (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        toggleLeftBar,
        toggleRightBar,
        toggleContext,
        onChangeToggleLeftBar,
        onChangeContext,
        onChangeToggleRightBar,
      } = value
      const onChangeContextss = () => {
        onChangeContext()
      }
      const onChangeToggleLeftBars = event => {
        onChangeToggleLeftBar(event.target.value)
      }
      const onChangeRightBar = event => {
        onChangeToggleRightBar(event.target.value)
      }
      return (
        <div className="consumer-layout">
          <h1 className="head">Layout</h1>
          <input
            type="checkbox"
            id="conText"
            className="input-container"
            value={toggleContext}
            onChange={onChangeContextss}
          />
          <label htmlFor="conText" className="label-container">
            Content
          </label>
          <input
            type="checkbox"
            id="conTexts"
            value={toggleLeftBar}
            onChange={onChangeToggleLeftBars}
            className="input-container"
          />
          <label htmlFor="conTexts" className="label-container">
            Left Navbar
          </label>
          <input
            type="checkbox"
            id="conTextss"
            value={toggleRightBar}
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
