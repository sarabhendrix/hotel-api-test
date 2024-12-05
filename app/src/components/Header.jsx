import '../styles/Header.css';
import { Link } from "react-router-dom";
import profileIcon from '../assets/images/profile-icon.png';


const Header = () => {

  const handleLogout = () => {
        window.location.href = '/';
  };

  return (
    <div className="header">
      <div>
        <h1><Link to ="/home">VacationPlanner</Link></h1>
      </div>
      <div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <Link to="/account">
          <img id="profile-icon" src={profileIcon} alt="profile-icon" />
        </Link>
      </div>
      <div>
        <Link to="/saved-listings">
          <button className="saved-listings-button">Saved Listings</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;