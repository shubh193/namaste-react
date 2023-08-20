import React from 'react';
import ReactDOM from 'react-dom/client';
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkY9fBy_IaJ0gCSKtcnhtrnEQW97G1een_A&usqp=CAU"
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
/*
const styleCard = {
  backgroundColor: 'blue',
};*/
const RestaurantCard = ({ resName, cuisine }) => {
  //const { resName, cuisine } = props;
  //console.log(props);

  return (
    /*<div className="res-card" style={{ backgroundColor: 'orange' }}>*/
    <div className="res-card">
      <img
        src="https://b.zmtcdn.com/data/pictures/2/19487572/1c58839ab148666265a7bc30344c3960_o2_featured_v2.jpg"
        className="res-logo"
        alt="res-image"
      />
      //*<h3>Rool's Hut</h3>*/ /*<h4>Dhosa, South Indian, Asian</h4>*/
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="textbox"
          placeholder="Search for restaurants and foods"
          className="search-box"
        />
        <button className="search-btn">search</button>
      </div>
      <div className="res-container">
        <RestaurantCard
          resName="Rool's Hut"
          cuisine="Dhosa, South Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
        <RestaurantCard resName="KFC" cuisine="Chiken Bucket, Patna" />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />); //component
