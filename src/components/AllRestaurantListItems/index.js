import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {AiOutlineLeftSquare, AiOutlineRightSquare} from 'react-icons/ai'

import CarouselRoute from '../CarouselRoute'
import RestaurantHeader from '../RestaurantHeader'
import RestaurantListCard from '../RestaurantListCard'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllRestaurantSection extends Component {
  state = {
    restaurantListItems: [],
    activeOptionId: 'Lowest',
    currentPage: 0,
    maxPages: 0,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId, currentPage} = this.state
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${
      currentPage * 9
    }&limit=9&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const maxItems = fetchedData.total
      const maxPages = (maxItems % 9) + 1
      const updatedData = fetchedData.restaurants.map(restaurant => ({
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        id: restaurant.id,
        imageUrl: restaurant.image_url,
        rating: restaurant.user_rating.rating,
        totalReviews: restaurant.user_rating.total_reviews,
        ratingColor: restaurant.user_rating.rating_color,
      }))
      this.setState({
        maxPages,
        restaurantListItems: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSortBy = activeOptionId => {
    this.setState({activeOptionId}, this.getRestaurants)
  }

  renderRestaurantListView = () => {
    const {activeOptionId, restaurantListItems} = this.state

    return (
      <>
        <RestaurantHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          changeSortBy={this.changeSortBy}
        />
        <hr className="hr-line" />
        <ul className="restaurant-list">
          {restaurantListItems.map(restaurant => (
            <RestaurantListCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </ul>
      </>
    )
  }

  renderFailureView = () => (
    <div className="error-view-container">
      <img
        src="https://res.cloudinary.com/dy8cli8om/image/upload/v1675945354/erroring_1notFound_jy5ex2.png"
        alt="restaurants failure"
        className="failure-img"
      />
      <h1 className="failure-heading-text">Page Not Found</h1>
      <p className="failure-description">
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <button type="button" className="error-button">
        Home Page
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="restaurants-list-loader" className="loader-container">
      <Loader type="Oval" color="#f7931e" height="50" width="50" />
    </div>
  )

  renderRestaurants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  leftArrowClicked = () => {
    const {currentPage} = this.state
    if (currentPage > 0) {
      this.setState(
        prev => ({currentPage: prev.currentPage - 1}),
        this.getRestaurants,
      )
    }
  }

  rightArrowClicked = () => {
    const {currentPage} = this.state
    if (currentPage < 3) {
      this.setState(
        prev => ({currentPage: prev.currentPage + 1}),
        this.getRestaurants,
      )
    }
  }

  render() {
    const {currentPage, maxPages} = this.state
    return (
      <div>
        <CarouselRoute />
        <div className="all-restaurant-list-container">
          {this.renderRestaurants()}
          <div className="navigation">
            <button
              type="button"
              className="arrow-button"
              onClick={this.leftArrowClicked}
              data-testid="pagination-left-button"
            >
              <AiOutlineLeftSquare size={35} style={{color: '#64748B'}} />
            </button>
            <span data-testid="active-page-number" className="current-page">
              {currentPage + 1} of {maxPages}
            </span>
            <button
              type="button"
              className="arrow-button"
              onClick={this.rightArrowClicked}
              data-testid="pagination-right-button"
            >
              <AiOutlineRightSquare size={35} style={{color: '#64748b'}} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default AllRestaurantSection
