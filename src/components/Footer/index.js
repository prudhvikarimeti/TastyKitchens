import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-heading-container">
      <img
        src="https://res.cloudinary.com/dy8cli8om/image/upload/v1675958479/Vectorfooter-hat-image_syrran.png"
        alt="website-footer-logo"
        className="website-logo"
      />
      <h1 className="heading">Tasty Kitchens</h1>
    </div>
    <p className="text">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-icons-container">
      <FaPinterestSquare testid="pintrest-social-icon" className="icon" />
      <FaInstagram testid="instagram-social-icon" className="icon" />
      <FaTwitter testid="twitter-social-icon" className="icon" />
      <FaFacebookSquare testid="facebook-social-icon" className="icon" />
    </div>
  </div>
)

export default Footer
