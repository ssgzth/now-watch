import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBtn } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { SUGG_URL, YT_SEARCH_URL, YT_URL } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { setVideos } from "../utils/videoSlice";
import DarkMode from "./DarkMode";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const searchCache = useSelector((store) => store.search);
  // const navigate = useNavigate();

  const handleMenuToggle = () => {
    dispatch(toggleBtn());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        console.log(searchCache);
        setSuggestions(searchCache[searchQuery]);
      } else {
        handleSearchQuery();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchQuery = async () => {
    const data = await fetch(SUGG_URL + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleSuggestionClick = (e) => {
    console.log(e);
    setSearchQuery(e);
    setShowSugg(false);
  };

  const handleSearch = async () => {
    const data = await fetch(YT_SEARCH_URL + searchQuery + "&type=video");
    const json = await data.json();
    // console.log(json.items);
    dispatch(setVideos(json.items));
    setShowSugg(false);
  };

  const handleLogo = () => {
    // navigate("/");
  };

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className="flex col-span-1 justify-normal">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="hamburger-image"
          className="ml-1 h-8 cursor-pointer dark:invert"
          onClick={handleMenuToggle}
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7YddwnyjMVOw1uH0M_f__EnFQeqgIdRGrQ&s"
          alt="logo"
          className="h-8 mx-4 dark:invert dark:bg-gray-800"
          onClick={handleLogo}
        />
      </div>
      <div className="col-span-10">
        <div className="px-32 flex justify-center">
          {/* Adjusted padding for better responsiveness */}
          <input
            type="text"
            className="px-4 w-1/2 border border-gray-400 p-2 rounded-l-full dark:bg-gray-800"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          <button
            className="border border-gray-400 px-4 py-2 rounded-r-full bg-blue-500"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
        {showSugg && (
          <div className="bg-white mx-72 absolute px-1 w-[20rem] shadow-lg rounded-lg border border-gray-100 dark:bg-gray-800 ">
            <ul className="px-2">
              {suggestions &&
                suggestions.map((sugg, index) => (
                  <li
                    className="hover:bg-gray-100 py-2 shadow-sm text-sm dark:hover:bg-gray-600  cursor-pointer"
                    key={index}
                    onClick={() => handleSuggestionClick(sugg)}
                  >
                    {sugg}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex justify-between">
        <DarkMode />
        <img
          className="h-8 mr-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpPwM5mR5lNHGg9vxaoUgcnAIBOJumsoJrg&s"
          alt="user-profile"
        />
      </div>
    </div>
  );
};

export default Header;
