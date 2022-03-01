import './index.css'

const Header = () => (
  <div className="background">
    <nav className="navbar navbar-expand-lg ">
      <img
        src="https://kdmengineers.com/wp-content/uploads/2021/12/KMDLogoHorizontal-R-300x169.png"
        alt="logo"
        className="uday logo"
      />
      <button
        className="navbar-toggler uday"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSu.
        pportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon uday">uday</span>
      </button>

      <div
        className="collapse navbar-collapse uday"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item active mr-4 ml-5">
            <a className="nav-link uday" href="uday">
              <img
                src="https://img.icons8.com/ios-filled/2x/blood-sample--v2.gif"
                alt="img"
                className="logoSmall"
              />
              Test APIs <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown mr-4">
            <a
              className="nav-link dropdown-toggle uday"
              href="uday"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://img.icons8.com/ios/72/create-order--v2.gif"
                alt="img"
                className="logoSmall"
              />
              Create Order
            </a>
            <div
              className="dropdown-menu background1"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item uday" href="uday">
                Action
              </a>
              <a className="dropdown-item uday" href="uday">
                Another action
              </a>
              <div className="dropdown-divider">
                <h1>uday</h1>
              </div>
              <a className="dropdown-item uday" href="uday">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown mr-4">
            <a
              className="nav-link dropdown-toggle uday"
              href="uday"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://img.icons8.com/ios/72/todo-list--v2.gif"
                alt="img"
                className="logoSmall"
              />
              List Orders
            </a>
            <div
              className="dropdown-menu background1"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item uday" href="uday">
                Action
              </a>
              <a className="dropdown-item uday" href="uday">
                Another action
              </a>
              <div className="dropdown-divider">
                <h1>uday</h1>
              </div>
              <a className="dropdown-item uday" href="uday">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item dropdown mr-4">
            <a
              className="nav-link dropdown-toggle uday"
              href="uday"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://img.icons8.com/dusk/2x/list--v2.gif"
                className="logoSmall"
                alt="img"
              />
              List Jobs
            </a>
            <div
              className="dropdown-menu background1"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item uday" href="uday">
                Action
              </a>
              <a className="dropdown-item uday" href="uday">
                Another action
              </a>
              <div className="dropdown-divider">
                <h1>uday</h1>
              </div>
              <a className="dropdown-item uday" href="uday">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-outline-danger m-3 p-2 uday1"
            type="submit"
          >
            Log Out
          </button>
        </form>
      </div>
    </nav>
    <div className="headCard">
      <h1 className="head">Welcome to KDM LAB Application</h1>
      <p className="head">uuday3804@gmail.com</p>
    </div>
  </div>
)

export default Header
