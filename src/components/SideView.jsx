import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setVideos } from "../utils/videoSlice";

const SideView = () => {
  const btnView = useSelector((store) => store.menu.menubtn);
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(setVideos([]));
  };

  if (!btnView) return;

  return (
    <div className="col-span-2 p-3 border border-spacing-2 ">
      <ul>
        <li className="hover:font-bold">
          <Link to={"/"} onClick={handleHome}>
            Home
          </Link>
        </li>
        <li>Live</li>
        <li>Subscribtions</li>
        <li>Connect</li>
      </ul>
      <h1 className="font-bold mt-4">You</h1>
      <ul className="ml-2">
        <li>Home</li>
        <li>Live</li>
        <li>Subscribtions</li>
        <li>Connect</li>
      </ul>
      <h1 className="font-bold mt-4">You</h1>
      <ul className="ml-2">
        <li>Home</li>
        <li>Live</li>
        <li>Subscribtions</li>
        <li>Connect</li>
      </ul>
    </div>
  );
};

export default SideView;
