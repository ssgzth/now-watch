import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleBtn } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchParty = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const btn = useSelector((store) => store.menu.menubtn);

  useEffect(() => {
    // Close the menu when the component mounts
    dispatch(closeMenu());
    // Cleanup function to toggle the button when the component unmounts
  }, []);

  console.log(btn);

  return (
    <div className={`${btn ? "col-span-10" : "col-span-12"}`}>
      <div className="p-2 m-2 flex ">
        <div className="w-8/12">
          <iframe
            width={`${btn ? "660" : "800"}`}
            height="410"
            className="rounded-lg"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-4/12">
          <LiveChat />
        </div>
      </div>
      <div className="p-2 m-2 flex">
        <div className="w-8/12">
          <CommentsContainer />
        </div>
        <div className="w-4/12 bg-slate-100 p-2 text-center rounded-md font-bold dark:bg-gray-800 dark:border dark:border-white">
          more videos.....
        </div>
      </div>
    </div>
  );
};

export default WatchParty;
