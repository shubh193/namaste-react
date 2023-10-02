import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
  return (
    <div className="menu">
      {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(', ')}</h3>
      <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
    */}
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{' Rs.'}
            {item.card.info.price}
          </li>
        ))}
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
