import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkY9fBy_IaJ0gCSKtcnhtrnEQW97G1een_A&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="home">Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
