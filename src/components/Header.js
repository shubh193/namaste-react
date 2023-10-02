import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('Header render');
  useEffect(() => {
    console.log('useEffect render');
  }, []);
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
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Card</li>
          <button
            className="login-btn"
            onClick={() => {
              //setBtnNameReact('logout');
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
