import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestaurantListCard = props => {
  const {restaurant} = props
  const {
    imageUrl,
    name,
    cuisine,
    rating,
    totalReviews,
    id,
    ratingColor,
  } = restaurant

  return (
    <li data-testid="restaurant-item" className="restaurant-item">
      <Link to={`/restaurant/${id}`} className="link-item">
        <img src={imageUrl} alt="restaurant" className="image" />
        <div>
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <AiFillStar className="star" style={{color: `${ratingColor}`}} />
            <p className="rating">{rating}</p>
            <p className="total-reviews">({totalReviews} rating)</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default RestaurantListCard
