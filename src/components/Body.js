import RestaurantCard from '../RestaurantCard';
import restaurantList from '../utils/mockData';
import { useEffect, useState } from 'react';

const Body = () => {
  //local state variable -- super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);

  useEffect(() => {
    console.log('useEffect called');
  }, []);
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
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic avgRating > 4
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            //console.log('click kiya na jhut nai 😂😂😂');
            //console.log(listOfRestaurants);
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
