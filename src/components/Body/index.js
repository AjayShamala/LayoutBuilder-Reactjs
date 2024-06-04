import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value
      return (
        <div className="container">
          {showLeftNavbar ? (
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
          {showContent ? (
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
          {showRightNavbar ? (
            <div className="navbar-container">
              <h1 className="left">Right Navbar</h1>
              <div className="unorder-list">
                <p className="list">Ad 1</p>
                <p className="list">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
