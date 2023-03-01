import {Link} from 'react-router-dom'

import './index.css'

const NotFoundRoute = () => (
  <div className="restaurant-error-view-container">
    <img
      src="https://res.cloudinary.com/dy8cli8om/image/upload/v1675945354/erroring_1notFound_jy5ex2.png"
      alt="not found"
      className="restaurant-failure-img"
    />
    <h1 className="restaurant-failure-heading-text">Page Not Found</h1>
    <p className="restaurant-failure-description">
      we are sorry, the page you requested could not be foundPlease go back to
      the homepage
    </p>
    <Link to="/">
      <button className="error-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)
export default NotFoundRoute
