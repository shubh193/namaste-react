import RestaurantCard from '../RestaurantCard';
import restaurantList from '../utils/mockData';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {
  //local state variable -- super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState('');

  console.log('Body rendered');
  /*  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('--here will be api link--');
    const json = data.json();
    console.log(json);
    not a good way
    setlistOfRestaurants(json.data.cards[2].data.cards);

    good approach--  optional chaining
    setlistOfRestaurants(json?.data?.cards[2]?.data?.cards);
  };
  conditional rendering
  if (listOfRestaurants.length === 0) {
    //return <h1>loading......</h1>;
    return <Shimmer />;
  }
  
    return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
  
*/

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants and foods"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //filter the restaurants cards and update the UI
            //searchText
            console.log(searchText);
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res.data.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setlistOfRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
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
