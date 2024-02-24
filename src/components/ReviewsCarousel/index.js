import './index.css'

const ReviewsCarousel = props => {
  const {reviewsList, selectedIndex} = props
  const reviewDetails = reviewsList[selectedIndex]
  const {imgUrl, username, companyName, description} = reviewDetails
  return (
    <div className="ReviewsCarousel">
      <img src={imgUrl} alt={username} />
      <p className="username">{username}</p>
      <p className="companyName">{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}
export default ReviewsCarousel
