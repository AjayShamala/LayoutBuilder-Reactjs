import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {toggleLeftNavbar, toggleContext, toggleRightNavBar} = value
      return (
        <div className="container">
          {toggleLeftNavbar ? (
            <div className="navbar-container">
              <h1 className="left">Left Navbar Menu</h1>
              <ul className="unorder-list">
                <li className="list-container">Item1</li>
                <li className="list-container">Item2</li>
                <li className="list-container">Item3</li>
                <li className="list-container">Item4</li>
              </ul>
            </div>
          ) : null}
          {toggleContext ? (
            <div className="navbar-container">
              <h1 className="left">Content</h1>
              <ul className="unorder-list">
                <li className="conta">
                  <p className="para">
                    Lorem ipsum dolor sit amet, consectur adipiscing elit
                    ,elismod tempor incidient ut labore et dolore magna aliqua
                    Ut enim ad minim veniam.
                  </p>
                </li>
              </ul>
            </div>
          ) : null}
          {toggleRightNavBar ? (
            <div className="navbar-container">
              <h1 className="left">Right Navbar</h1>
              <ul className="unorder-list">
                <li className="list">Ad 1</li>
                <li className="list">Ad 2</li>
              </ul>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
