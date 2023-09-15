import { CDN_URL } from './utils/constants';
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    deliveryTime,
    avgRating,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
        alt="res-image"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(' ')}</h5>
      <h5>{locality}</h5>
      <h5>{deliveryTime} minutes</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestaurantCard;
