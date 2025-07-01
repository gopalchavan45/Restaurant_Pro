import { useEffect, useState } from "react";
import { RES_URL } from "../../Util/contains";

import Rescard from "./Rescard";
import axios from "axios";
import ShimmerUI from "../../Util/Shimarui";

import { Link } from "react-router-dom";
import useOnlineStatus from "../../Util/useOnlineStatus";
import { isPromoted } from "./Rescard";

const Body = () => {
  const [listOfRestaurant, setList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchme, setSearchMe] = useState("");
  const ShowPromoted = isPromoted(Rescard);
  console.log(searchme);

  const fetchData2 = async () => {
    //console.log("🔄 Fetching restaurant data...");

    try {
      const data = await axios.get(RES_URL);

      const cards = data.data?.data?.cards;

      // ✅ Find the card that includes restaurant grid
      const restaurantCard = cards?.find((card) =>
        card?.card?.card?.id?.includes("restaurant_grid_listing")
      );

      const finalData =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // console.log("🍽️ Final Restaurant List:", finalData);
      setList(finalData);
      setFilterRestaurant(finalData);
    } catch (err) {
      //console.error("❌ API error:", err);
    }
  };

  useEffect(() => {
    fetchData2();
  }, []);

  const FilteredRating = () => {
    const listfilter = listOfRestaurant.filter(
      (ress) => ress?.info?.avgRating > 4.5
    );
    //console.log("this are top" + listfilter);
    setFilterRestaurant(listfilter);
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>The right now offline</h1>;
  }
  if (filterRestaurant?.length === 0) {
    return (
      <div>
        <ShimmerUI />
      </div>
    );
  }

  //console.log("showOpend" + showPromoted);
  // ✅ Correct return statement:
  return (
    <div className="p-6">
      {/* Filter and Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={FilteredRating}
        >
          Top Rated Restaurants
        </button>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            className="borde border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Search restaurants..."
            value={searchme}
            onChange={(e) => setSearchMe(e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={() => {
              const Filterbysearch = listOfRestaurant.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchme.toLowerCase())
              );
              // console.log("not file" + Filterbysearch);
              setFilterRestaurant(Filterbysearch);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ? (
              <ShowPromoted resdata={restaurant?.info} />
            ) : (
              <Rescard resdata={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
