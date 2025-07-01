import { useState, useEffect } from "react";
import { Menu_URL } from "./contains";
const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      const response = await fetch(Menu_URL + resid);
      const json = await response.json();
      setResInfo(json?.data?.cards);
    };
    fetchRestaurantMenu();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
