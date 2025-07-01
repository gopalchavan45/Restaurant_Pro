import { useParams } from "react-router-dom";
import restaurantMenuList from "../../Util/restaurantMList";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../../Util/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  // useEffect(() => {
  //   const fetchRestaurantMenu = async () => {
  //     const response = await fetch(Menu_URL + resid);
  //     const json = await response.json();
  //     setResInfo(
  //       json?.data?.cards?.find((item) =>
  //         item?.card?.card["@type"].includes("food.v2.Restaurant")
  //       ).card?.card?.info
  //     );
  //   };
  //   fetchRestaurantMenu();
  // }, []);

  if (resInfo === null) {
    return <div>Loading...</div>;
  }
  const restaurantCard = resInfo?.find((item) =>
    item?.card?.card["@type"]?.includes("food.v2.Restaurant")
  );

  const { name, avgRating, costForTwoMessage, city, locality } =
    restaurantCard?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold m-4 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        Rating : {avgRating} - {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;
