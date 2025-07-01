<div className="filter">
        <button className="filter-btn" onClick={FilteredRating}>
          Top Rated Restaurants
        </button>
        {/* search for */}
        <div className="serarch">
          <input
            className="input-serach"
            value={searchme}
            onChange={(e) => {
              setSearchMe(e.target.value);
            }}
          ></input>
          <button
          // onClick={() => {
          //   const Filterbysearch = listOfRestaurant.filter((res) =>
          //     res.name.toLowerCase().includes(searchme.toLowerCase())
          //   );
          //   setList(Filterbysearch);
          // }}
          >
            Search
          </button>
        </div>
      </div>
      